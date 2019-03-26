import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>点我</Button>
        </header>
      </div>
    );
  }
}

export default App;
