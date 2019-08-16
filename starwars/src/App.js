import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
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
      .get('https://swapi.co/api/people/', { params: {} })
      .then(response => {
        console.log(response)
        const peopleResults = response.data.results;

        setPeople(peopleResults);
      });



  }, []);

  return (
    
      <div>
        {people.map((arr) => {
          return
          <CharacterCard
            key={arr.name}
            name={arr.name}
            birthYear={arr.birth_year} />
        })}
      </div>
    
  );
}

export default App;
