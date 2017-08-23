import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongContainer from './containers/SongContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SongContainer />
      </div>
    );
  }
}

export default App;
