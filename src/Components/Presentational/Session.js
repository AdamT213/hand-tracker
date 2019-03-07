import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import TableName from './TableName'
import { setCurrentTable } from '../../Actions/tableActions';
import { InfoButton } from "./styles";
import { Div } from "./styles";

export class Session extends Component {  

  handleClick = event => { 
    event.preventDefault();
    let table = {};
    table.id= event.target.id;
    this.props.setCurrentTable(table);   
  } 
    
  render() { 
    const tables = this.props.tables != undefined ? this.props.tables.map((tbl, index) => {
      return <div><TableName Id={tbl.id} capacity={tbl.capacity} size={tbl.size} buyin={tbl.buyin} tags={tbl.tables_tags} key={index}/><InfoButton id={tbl.id} onClick={this.handleClick}>View Hands</InfoButton>
       </div>}) : null

     return (
      <Div>
        <h3>Minutes: {this.props.Minutes}</h3>
        <h3>Status: {this.props.Status ? 'Up'  : 'Down'}</h3>
        <h3>Amount: ${this.props.Amount}</h3>
        <h3>Tables:</h3>
        <ul>
        {tables}
        </ul>
      </Div>
      )
    }
  }

  export default connect(null, { setCurrentTable })(Session);