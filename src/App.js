import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
