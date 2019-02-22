import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SessionName from './Presentational/SessionName';
import { setCurrentSession } from '../Actions/sessionActions' 
import { deleteSession } from '../Actions/sessionActions' 

class sessionsList extends Component { 

  handleClick = event => {
    event.preventDefault();
    let session = {};
    session.id= event.target.id;
    this.props.setCurrentSession(session);
  } 

  handleDelete = event => {
    event.preventDefault();
    let session = {};
    session.id= event.target.id;
    this.props.deleteSession(session);
  } 

  render() {
    const sessions = this.props.sessions.map((sesh, index) => {
      return <div className="small"><SessionName Id={sesh.id} Status={sesh.status} 
      Minutes={sesh.duration} Amount= {sesh.amount} 
      key={index} /><br /><button id={sesh.id} onClick={this.handleClick}>
      See Info For This Session</button><br /><br /><button className="small"
      id={sesh.id} onClick={this.handleDelete}>
      Delete This Session</button><br /><br /></div>
    });

    return (
        <div className= "App"> 
        <Router> 
        <div className="container">
            <h2>Here are all of your Past Sessions</h2>
          <ul>
            {sessions}
           </ul>
          </div>
          </Router>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {sessions: state.SessionsReducer.sessions}
} 

export default connect(mapStateToProps, { setCurrentSession, deleteSession })(sessionsList);