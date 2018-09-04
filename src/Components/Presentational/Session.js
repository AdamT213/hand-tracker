import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import TableName from './TableName'
import { setCurrentTable } from '../../Actions/tableActions';

export class Session extends Component {  

  handleClick = event => { 
    event.preventDefault();
    let table = {};
    table.id= event.target.id;
    this.props.setCurrentTable(table);   
  } 
    
  render() { 

    const tables = this.props.tables !== undefined ? this.props.tables.map((tbl, index) => {
      return <div><TableName Id={tbl.id} capacity={tbl.capacity} size={tbl.size} buyin={tbl.buyin} key={index}/><button id={tbl.id} onClick={this.handleClick}>View Hands</button>
       </div>}) : null

     return (
      <div className= "Session"> 
        <h3>Id: {this.props.id}</h3> 
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

  export default connect(null, { setCurrentTable })(Session);