import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="notes-app"></div>
        <div className="search-bar">
          <input className="notes-List"></input>
          <ul>
            <li><a>note#1</a></li>
            <li><a>note#2</a></li>
            <li><a>note#3</a></li>
            <li><a>note#4</a></li>
          </ul>
        </div>
        <div className="editor-window">
        it was the worst of times it was the best
        </div>
      </div>
    );
  }
}

export default App;
