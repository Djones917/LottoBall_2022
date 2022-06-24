import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Ball';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num={17} />
        <Ball num={1} />
        <Ball num={40} />
        <Ball num={27} />
      </div>
    );
  }
}

export default App;

