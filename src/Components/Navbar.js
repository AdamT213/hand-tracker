import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSessions } from '../Actions/sessionActions'

class NavBar extends Component {

  handleOnClick = event => { 
    event.preventDefault(); 
    this.props.getSessions();
  }

  render() {

    return (
      <div className="navbar">
        <NavLink className="link"
        to="/"
        exact
      >Home</NavLink>
      <NavLink className="link" to= '/sessions/index' onClick={this.handleOnClick}>See your Past Sessions</NavLink>
      </div>
    );
  }
};

export default connect (null, { getSessions})(NavBar); 
