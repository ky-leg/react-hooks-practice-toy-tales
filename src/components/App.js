import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onDelete(id){
    const newToys = toys.filter(toy => {
      return toy.id !== id
    })
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    setToys(newToys)
  }

  function onLike(updateToy){
    console.log(updateToy)
    
    const newToys = (toys.map(toy => {
      if (toy.id===updateToy.id)
        return {...toy, likes: (updateToy.likes + 1)}
      else
        return {...toy}
        
    }))
    fetch(`http://localhost:3001/toys/${updateToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": updateToy.likes + 1,
      })
    })
    setToys(newToys)
  }

  function handleSubmit(name, image){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": image,
        "likes": 0
      })
    })
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(r => setToys(r))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        onDelete={onDelete}
        onLike={onLike}
        toys={toys} />
    </>
  );
}

export default App;
