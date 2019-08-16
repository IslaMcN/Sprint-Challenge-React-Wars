import React from 'react';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
  .get('https://swapi.co/api/people/')
  .then( response => 
    {const Luke = response.data.results[0];
    const C3PO = response.data.results[1];
    const R2 = response.data.results[2];
    const Misunderstood = response.data.results[3];
    const Leia = response.data.results[4];
    const Owen = response.data.results[5];
    const Beru = response.data.results[6];
    const R5 = response.data.results[7];
    const Biggs = response.data.results[8];
    const BabyDaddy = response.data.results[9] });
  
  
  
    },[] );

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <p>{Luke}</p>
      <p>{C3PO}</p>
    </div>
  );
}

export default App;
