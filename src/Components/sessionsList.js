import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SessionName from './Presentational/SessionName';
import InProgressSessionName from './Presentational/InProgressSessionName';
import { setCurrentSession } from '../Actions/sessionActions';
import { deleteSession } from '../Actions/sessionActions';
import {InfoButton, EndButton} from "./Presentational/styles";
import styles from "styled-components"; 

const DivContainer = styles.div` 
  display: inline-block;
`;

const CenteredDiv = styles.div` 
  display: inline-block;
  vertical-align: middle;
`;

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
      return sesh.isTermed ? 
      ( <CenteredDiv><SessionName Id={sesh.id} Status={sesh.status} 
      Minutes={sesh.duration} Amount= {sesh.amount} created_at={sesh.created_at}
      key={index} tags={sesh.sessions_tags} /><br />
        <InfoButton id={sesh.id} onClick={this.handleClick}>
      See Info For This Session</InfoButton><br /><br />
      <EndButton id={sesh.id} onClick={this.handleDelete}>Delete this Session</EndButton><br /><br /></CenteredDiv> ) : 

      ( <CenteredDiv><InProgressSessionName Id={sesh.id} created_at={sesh.created_at} tags={sesh.sessions_tags} key={index} /><br /><InfoButton id={sesh.id} onClick={this.handleClick}>See Info For This Session</InfoButton><br /><br />
      <EndButton id={sesh.id} onClick={this.handleDelete}>Delete this Session</EndButton><br /><br /></CenteredDiv> )
    });

    return (
        <div className= "App">
        <Router>
        <DivContainer>
            <h2>Here are all of your Past Sessions</h2>
          <DivContainer>
            {sessions}
           </DivContainer>
          </DivContainer>
          </Router>
        </div>
    )
  }
};

function mapStateToProps(state){
  return {sessions: state.SessionsReducer.sessions}
} 

export default connect(mapStateToProps, { setCurrentSession, deleteSession })(sessionsList);