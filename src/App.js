import React, { Component } from 'react';
import './App.css'; 
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import showSession from './Components/showSession'; 
import showTable from './Components/showTable';
import showHand from './Components/showHand';
import sessionsList from './Components/sessionsList';

export const history = createBrowserHistory();

class App extends Component {

  render() {

    document.title = "Wilkommen";
    
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
          <Route exact path= "/" component= {Home} />  
          <Route exact path= "/session/:id" component= {showSession} /> 
          <Route path= "/sessions/index" component= {sessionsList} /> 
          <Route exact path= "/session/:id/table/:id" component= {showTable}/> 
          <Route path= "/session/:id/table/:id/hand/:id" component= {showHand} />
          </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
