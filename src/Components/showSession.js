import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' 
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Session from './Presentational/Session' 
import AddTable from './Forms/AddTable' 
import { endSession, setCurrentSession } from '../Actions/sessionActions'

export class showSession extends Component { 

  handleClick = event => {
    event.preventDefault();
    let session = {};
    session.id= event.target.id;
    this.props.endSession(session);
  }
  
  render() {
      return this.props.session.isTermed ? ( 
        <div>
        <Session Id={this.props.session.id} Status={this.props.session.status} 
        Minutes={this.props.session.duration} Amount= {this.props.session.amount} 
        tables={this.props.session.tables} />
         </div> 
      ) : 
      (
        <div>
        <div className= "rightside">
        <p>Add a New Table</p>
        <AddTable />
        </div>
        <div className="leftside">
        <Session Id={this.props.session.id} Status={this.props.session.status} Minutes={this.props.session.duration} Amount= {this.props.session.amount} tables={this.props.session.tables} />
        <button id={this.props.session.id} onClick={this.handleClick}>End This Session</button>
        </div>
        <div className= "clear"></div>
      </div>
      );
    }
  }

function mapStateToProps(state){
  return {session: state.SessionsReducer.session}
}

export default connect(mapStateToProps, { endSession }) (showSession); 