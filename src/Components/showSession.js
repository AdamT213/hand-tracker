import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' 
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Session from './Presentational/Session' 
import AddTable from './Forms/AddTable' 

export class showSession extends Component { 
     
  render() { 

      return ( 
        <div> 
        <Session Id={this.props.session.id} Status= {this.props.session.status} Minutes={this.props.session.duration} Amount= {this.props.session.amount} tables={this.props.session.tables} /> 
        <p>Add a New Table</p>
         <AddTable />  
         </div>
      ); 
    }
  }

function mapStateToProps(state){ 
  return {session: state.SessionsReducer.session}
}

export default connect(mapStateToProps, null) (showSession); 