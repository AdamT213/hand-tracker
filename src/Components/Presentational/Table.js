import React, { Component } from 'react'; 

export class Table extends Component {  
    
  render() { 
    
      return (   
        <div className= "Table"> 
          <h3>Id: {this.props.id}</h3> 
          <h3>Buy-in: {this.props.buyin}</h3> 
          <h3>Capacity:<div> {this.props.capacity}</div></h3> 
          <h3>Size: {this.props.size}</h3> 
        </div> 
      )
    }
  }

export default Table;