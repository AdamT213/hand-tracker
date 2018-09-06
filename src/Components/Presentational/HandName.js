import React, { Component } from 'react'; 

export class HandName extends Component {  

  //Shows just the basic info for a hand that should be seen from the index page
    
  render() { 
    
      return (   
        <div className= "HandName"> 
          <h3>Id: {this.props.Id}</h3>
          <h3>potSize: {this.props.potSize}</h3>
          <h3>status: {this.props.status}</h3>
        </div>
      )
    }
  }

export default HandName;