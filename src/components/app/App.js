import React, { Component } from 'react';
import logo from '../../res/img/facehole_circle_gap_lowAlpha.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jake Deacon</h1>
        </header>
        
        <p>TODO: Make pages/components for</p>
        <ul>
          <li>Welcome Page</li>
          <li>Resume</li>
          <li>some other janky shit</li>
          <li>some other janky shit</li>
          <li>some other janky shit</li>
          <li>some other janky shit</li>
        </ul>
      </div>
    );
  }
}

export default App;
