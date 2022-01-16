import React, {useState} from "react";

function ToyForm({handleSubmit}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function onSubmit(e){
    e.preventDefault()
    handleSubmit(name, image)
  }

  return (
    <div className="container">
      <form 
        onSubmit={onSubmit}
        className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={e => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
