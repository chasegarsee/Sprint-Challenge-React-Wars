import React from "react";
import Character from "./character";

const CharacterList = props => {
  return (
    <div className="character-list">
      {props.characters.map(character => {
        return (
          <Character
            character={character}
            componentDidMount={props.componentDidMount}
            getCharacters={props.getCharacters}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
