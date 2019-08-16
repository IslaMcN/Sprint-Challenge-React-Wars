import React from 'react';
import styled from 'styled-components';

const CharacterList = styled.div`
padding: 10%;
display:flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
background-color: #474787;
width: 20%;
margin: 22%;
color: #d1ccc0;
border-radius: 27%;
box-shadow: 5px 10px #cc8e35;`;

const CharacterCard = props => {
    return(
        <CharacterList >
            <h2>Character Name: {props.name}</h2>
            <p>Birth Year: {props.birthYear}</p>
        </CharacterList>
    );
};

export default CharacterCard;