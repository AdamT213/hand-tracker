import React, { Component } from 'react';
import './App.css'; 
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title-top">Hi Adam, welcome to your Personal Poker Universe!</h1> 
          <h1 className="App-title-middle">Not Adam? GTFO!</h1> 
          <h1 className="App-title-bottom">Just Kidding, you can stay</h1>
        </header> 
        <Home />
      </div>
    );
  }
}

export default App;
