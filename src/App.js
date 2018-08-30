import React, { Component } from 'react';
import './App.css'; 
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import showSession from './Components/showSession'; 
import showTable from './Components/showTable';
import sessionsList from './Components/sessionsList'

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
          <Switch>
          <div>
          <Navbar/>
          <Route exact path="/" component= {Home} />  
          <Route path = "/session/:id" component= {showSession} /> 
          <Route path = "/sessions/index" component= {sessionsList} /> 
          <Route path = "/session/:id/table/:id" component= {showTable}/> 
          </div>
          </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
