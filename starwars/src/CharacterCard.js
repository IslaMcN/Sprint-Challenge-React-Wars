import React from 'react';

const CharacterCard = props => {
    return(
        <div className="Character-List" key={props.name}>
            <h2>Character Name: {props.name}</h2>
            <p>{props.birth_year}</p>
        </div>
    );
};

export default CharacterCard;