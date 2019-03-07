import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getSessions } from '../Actions/sessionActions'
import styles from "styled-components";

const Div = styles.div` 
background: #ffffff;
margin-bottom: 1%;
padding: 1%;
border-bottom-style: solid;
`;

class NavBar extends Component {

  handleOnClick = event => { 
    event.preventDefault(); 
    this.props.getSessions();
  }

  render() {

    return (
      <Div>
        <NavLink className="link"
        to="/"
        exact
      >Home</NavLink>
      <NavLink className="link" 
      to= '/sessions/index' 
      onClick={this.handleOnClick}
      >See your Past Sessions</NavLink>
      </Div>
    );
  }
};

export default connect (null, { getSessions})(NavBar); 
