import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"; 
import addHand from './Forms/addHand'

export class Home extends Component { 
     
  render() { 
      return ( 
        <div> 
          <Link to={ addHand }> Add a new hand </Link> 
          <h4> Search For Hands By Category </h4> 
          <h4> Search For Sessions By Category </h4> 
          <h4> Search For Tables By Category </h4>
        </div> 
      ); 
  }
} 

export default Home; 