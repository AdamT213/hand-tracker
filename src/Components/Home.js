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
import { HomeButton } from "./Presentational/styles"
import { SearchTags } from "./Forms/SearchTags"

export class Home extends Component { 

  handleClick = event => {  
    this.props.startSession() 
  } 
     
  render() {  

      return ( 
        <div> 
          <Router> 
          <Switch> 
          <div>
          <HomeButton onClick={this.handleClick}>Start New Session</HomeButton><br />
          <SearchTags /> 
          </div>
          </Switch> 
          </Router>
        </div> 
      ); 
  }
} 

export default connect (null, { startSession})(Home); 