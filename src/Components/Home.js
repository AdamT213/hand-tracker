import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom"; 
import addHand from './Forms/addHand'

export class Home extends Component { 
     
  render() { 
      return ( 
        <div> 
          <Router> 
          <div>
          <NavLink to= '/hands/new'> Add a new hand </NavLink> 
          <Route path= '/hands/new' component={addHand}/> 
          <h4> Search For Hands By Category </h4> 
          <h4> Search For Sessions By Category </h4> 
          <h4> Search For Tables By Category </h4> 
          </div> 
          </Router>
        </div> 
      ); 
  }
} 

export default Home; 