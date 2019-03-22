import React from "react";

function Character(props) {
  return (
    <div className="character">
      <h3>{props.character.name}</h3>
      <p>Gender: {props.character.gender}</p>
      <p>Hair Color: {props.character.hair_color}</p>
    </div>
  );
}

export default Character;
