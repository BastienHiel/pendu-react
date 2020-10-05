import React, { Component } from 'react';
import './App.sass';

import Letters from './Letters'; 

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

class App extends Component {
  state = {
    alphabet,
    usedLetters: [], 
  }

  computeDisplay(phrase, usedLetters) {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
  }
  //arrow function to bind this 
  handleClick = (e) => {
    console.log(this)
  }

  render() {
    const { alphabet } = this.state; 
    return (
      <div className='app'>
        <Letters alphabet={alphabet} onClick={this.handleClick} />
      </div>      
    )
  }
}
    
export default App;
