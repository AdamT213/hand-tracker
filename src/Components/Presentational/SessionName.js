import React, { Component } from 'react'; 

export class SessionName extends Component {  

  //shows just the basic info for a session that should be seen from the index page
    
  render() {
      return ( 
        <div className= "SessionName"> 
          <h3>Id: {this.props.Id}</h3>
          <h3>Minutes: {this.props.Minutes}</h3>
          <h3>Status: {this.props.status}</h3>
          <h3>Amount: {this.props.amount}</h3>
        </div>
      )
    }
  }

export default SessionName;