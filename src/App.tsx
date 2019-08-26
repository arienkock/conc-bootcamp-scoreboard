import React, { Component } from 'react';
import Title from './components/Title';

import './App.css';
import LightSwitch from './components/LightSwitch';
import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="Test Title" />
          <LightSwitch />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
