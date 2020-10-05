import React, { Component } from 'react';
import './App.css';

import Letters from './Letters'; 

const Alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

class App extends Component {
  state = {
    Alphabet,
  }
  computeDisplay(phrase, usedLetters) {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
  }

  render() {
    const { Alphabet } = this.state; 
    return (
      <div className='app'>
        <Letters Alphabet={Alphabet} />
      </div>      
    )
  }
}
    
export default App;
