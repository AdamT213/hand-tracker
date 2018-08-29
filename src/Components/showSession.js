import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' 
import Session from './Presentational/Session'

export class showSession extends Component { 
     
  render() { 

      return ( 
        <div> 
        <Session Status= {this.props.status} Minutes={this.props.duration} Amount= {this.props.amount} 
         /> 
        </div> 
      ); 
    }
  }

function mapStateToProps(state){ 
  return {session: state.SessionsReducer.session}
}

export default showSession; 