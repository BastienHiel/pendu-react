import React, { Component } from 'react';
import './App.sass';

import { ALPHABET, COUNTRY } from './constants';
import Letters from './Letters'; 
import Alert from './Alert'; 
import Reset from './Reset'; 
import Riddle from './Riddle';

class App extends Component {
  state = {
    usedLetters: new Set(),
    goodLetters: new Set(), 
    inProgress: true,
    riddle: "",
    riddleSet: new Set(),
    reset: false, 
    won: false
  }

  componentDidMount() {
    const riddle = this.generateRiddle(); 
    const riddleSet = this.computeRiddleSet(riddle); 
    this.setState({
      riddle, 
      riddleSet
    })
  }

  computeDisplay(phrase, usedLetters) {  
    return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'));
  }

  computeRiddleSet(riddle) {
    return new Set([...riddle.replace(/\s+/g, '').split('')]);
  }

  //componentDidUpdate 
  //appel à une fonction reset
  componentDidUpdate() { 
    const { goodLetters, inProgress, reset, riddleSet, usedLetters  } = this.state; 
    if (usedLetters.size - goodLetters.size > 5 && inProgress !== false) {
      this.setState({ 
        inProgress: false
      })
    }

    if (riddleSet.size === goodLetters.size && inProgress !== false) {
      this.setState({ 
        inProgress: false, 
        won: true
      })
    }

    if (reset === true) {
      const riddle = this.generateRiddle(); 
      const riddleSet = this.computeRiddleSet(riddle); 
      this.setState({
        usedLetters: new Set(),
        goodLetters: new Set(), 
        inProgress: true, 
        riddle,
        riddleSet,
        reset: false, 
        won: false
      })
    }
  }

  generateRiddle() {    
    return COUNTRY[Math.floor(Math.random()*COUNTRY.length)];  
  }

  //arrow function for binding 
  handleLetterClick = (e) => {
    const clickedLetter = e.target.innerHTML; 
    this.disableButton(clickedLetter); 
    this.matchRiddle(clickedLetter);  
  }

  handleResetClick = () => {
    this.setState({
      reset: true
    })
  }

  matchRiddle(letter) {
    const { riddleSet } = this.state; 
    if (riddleSet.has(letter)) {
      this.setState(
        (prevState) => ({ goodLetters: prevState.goodLetters.add(letter) })
      )
    }
  }

  disableButton(letter) {
    this.setState(
      (prevState) => ({ usedLetters: prevState.usedLetters.add(letter) })
    )
  }

  render() {
    const { inProgress, riddle, usedLetters, won } = this.state; 
    const phrase = this.computeDisplay(riddle, usedLetters); 
    console.log(this.state); 
    return (
      <div className='app'>
        <Riddle phrase={phrase} />
        <Letters alphabet={ALPHABET} onClick={this.handleLetterClick} />
        { !inProgress && <Alert won={won} /> }
        { !inProgress && <Reset onClick={this.handleResetClick} /> }
      </div>      
    )
  }
}
    
export default App;
