import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {

  // function onDelete(id){
  //   console.log(id)
  // }

  return (
    <div id="toy-collection">{
      toys.map(toy => (
        <ToyCard 
          key={toy.id} 
          toy={toy} 
          onDelete={id => onDelete(id)} 
          onLike={id => onLike(toy)} />
      ))
      }</div>
  );
}

export default ToyContainer;
