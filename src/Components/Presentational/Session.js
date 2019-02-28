import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import TableName from './TableName'
import { setCurrentTable } from '../../Actions/tableActions';
import { InfoButton } from "./styles";

export class Session extends Component {  

  handleClick = event => { 
    event.preventDefault();
    let table = {};
    table.id= event.target.id;
    this.props.setCurrentTable(table);   
  } 
    
  render() { 

    const tables = this.props.tables != undefined ? this.props.tables.map((tbl, index) => {
      return <div><TableName Id={tbl.id} capacity={tbl.capacity} size={tbl.size} buyin={tbl.buyin} key={index}/><InfoButton id={tbl.id} onClick={this.handleClick}>View Hands</InfoButton>
       </div>}) : null

     return (
      <div className= "Session">
        <h3>Minutes: {this.props.Minutes}</h3>
        <h3>Status: {this.props.Status === 1 ? 'Up'  : 'Down'}</h3>
        <h3>Amount: ${this.props.Amount}</h3><br />
        <h3>Tables:</h3>
        <ul>
        {tables}
        </ul>
      </div>
      )
    }
  }

  export default connect(null, { setCurrentTable })(Session);