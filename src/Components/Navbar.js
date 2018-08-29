import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';

class NavBar extends Component {

  render() {

    return (
      <div className="navbar">
        <NavLink className="link"
        to="/"
        exact
      >Home</NavLink>
      </div>
    );
  }
};

export default NavBar;