import React from 'react';

const CharacterCard = props => {
    return(
        <div className="Character-List" >
            <h2>Character Name: {props.name}</h2>
            <p>{props.birthYear}</p>
        </div>
    );
};

export default CharacterCard;