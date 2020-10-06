import React, { Component } from 'react';
import './App.sass';

import Letters from './Letters'; 
import Riddle from './Riddle'; 

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
const country = ["AFRIQUE DU SUD", "ALGERIE", "ANGOLE", "BENIN", "BOTSWANA", "BURKINA", "BURUNDI", "CAMEROUN", "CAP VERT", "REPUBLIQUE CENTRAFRICAINE", "COMORES", "CONGO", "REBULIQUE DEMOCRATIQUE DU CONGO", "COTE D IVOIRE", "DJIBOUTI", "EGYPTE", "ERYTHREE", "ETHIOPIE",  "GABON", "GAMBIE", "GHANA", "GUINEE", "GUINEE BISSAU", "GUINEE EQUATORIALE", "KENYA", "LESOTHO", "LIBERIA", "LIBYE", "MADAGASCAR", "MALAWI", "MALI", "MAROC", "MAURICE", "MAURITANIE", "MOZAMBIQUE", "NAMIBIE", "NIGER", "NIGERIA", "OUGANDA", "RWANDA", "SAO TOME ET PRINCIPE", "SENEGAL", "SEYCHELLES", "SIERRA LEONE", "SOMALIE", "SOUDAN", "SUD SOUDAN", "SWAZILAND", "TANZANIE", "TCHAD", "TOGO", "TUNISIE", "ZAMBIE", "ZIMBABWE"];

class App extends Component {
  state = {
    alphabet,
    usedLetters: new Set(),
    riddle: this.generateRiddle(),
    won: false
  }

  computeDisplay(phrase, usedLetters) {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'));
  }

  generateRiddle() {    
    return country[Math.floor(Math.random()*country.length)];
  }

  //arrow function to bind this 
  handleClick = (e) => {
    console.log(this)
  }

  render() {
    const { alphabet, riddle, usedLetters} = this.state; 
    console.log(riddle)
    return (
      <div className='app'>
        <Riddle phrase={this.computeDisplay(riddle, usedLetters)} />
        <Letters alphabet={alphabet} onClick={this.handleClick} />
      </div>      
    )
  }
}
    
export default App;
