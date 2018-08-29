import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' 
import Session from './Presentational/Session' 
import addTable from './Forms/addTable' 

export class showSession extends Component { 
     
  render() { 

      return ( 
        <div> 
        <Session Status= {this.props.session.status} Minutes={this.props.session.duration} Amount= {this.props.session.amount} tables={this.props.session.tables} 
         />
         <addTable /> 
         </div>
      ); 
    }
  }

function mapStateToProps(state){ 
  return {session: state.SessionsReducer.session}
}

export default connect(mapStateToProps, null) (showSession); 