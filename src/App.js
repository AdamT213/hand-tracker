import React, { Component } from 'react';
import './App.css'; 
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import addHand from './Components/Forms/addHand';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title-top">Hi Adam, welcome to your Personal Poker Universe!</h1> 
          <h1 className="App-title-middle">Not Adam? GTFO!</h1> 
          <h1 className="App-title-bottom">Just Kidding, you can stay</h1>
        </header> 
        <Router history= {history}> 
          <div>
        <Navbar/> 
        <Route exact path='/' component= {Home} />   
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
