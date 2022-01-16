import React from "react";

function ToyCard({toy, onDelete, onLike}) {
  const {id, image, likes, name} = toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={() => onLike(toy)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => onDelete(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
