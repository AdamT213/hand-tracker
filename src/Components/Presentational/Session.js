import React, { Component } from 'react'; 
import Table from './Table'

export class Session extends Component {  
    
  render() { 

    const tables =  this.props.tables !== null ? this.props.tables.map((tbl, index) => {
      return <div><Table id={tbl.id} capacity={tbl.capacity} size={tbl.size} buyin={tbl.buyin} key={index}/> 
       </div>}) : null  

     return (
      <div className= "Session"> 
        <h3>id: {this.props.id}</h3> 
        <h3>Minutes: {this.props.duration}</h3> 
        <h3>Status:<div>{this.props.status === 1 ? 'Up'  : 'Down'}</div></h3> 
        <h3>Amount: {this.props.amount}</h3><br /> 
        <ul>
        {tables}
        </ul>
      </div>
      )
    }
  }

export default Session;