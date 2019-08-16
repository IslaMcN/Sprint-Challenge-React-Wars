import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 const [people, setPeople] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
  .get('https://swapi.co/api/people/', {params:{}})
  .then( response => 
    {const people = response.data.results;
    
    setPeople(people); });
  
  
  
    },[] );

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard
      key={people.name}
      name={people.name}
      BirthYear = {people.birth_year} />
    </div>
  );
}

export default App;
