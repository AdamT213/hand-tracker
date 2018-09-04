import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom"; 
import AddHand from './Forms/AddHand' 
import { startSession } from '../Actions/sessionActions' 
import { getSessions } from '../Actions/sessionActions'

export class Home extends Component { 

  handleClick = event => {  
    this.props.startSession() 
  } 

  handleOnClick = event => { 
    event.preventDefault; 
    this.props.getSessions();
  } 
     
  render() {  

      return ( 
        <div> 
          <Router> 
          <Switch> 
          <div>
          <button className= "navButton" onClick={this.handleClick}>Start New Session</button> 
          <h4> Search For Hands By Category </h4> 
          <h4> Search For Sessions By Category </h4> 
          <h4> Search For Tables By Category </h4> 
          </div>
          </Switch> 
          </Router>
        </div> 
      ); 
  }
} 

export default connect (null, { startSession, getSessions })(Home); 