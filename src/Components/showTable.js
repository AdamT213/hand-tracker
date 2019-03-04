import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' ;
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Table from './Presentational/Table';
import AddHand from './Forms/AddHand';
import { leaveTable } from '../Actions/tableActions';
import  AddTagsForm  from './Forms/AddTagsForm';
import { EndButton } from "./Presentational/styles";

export class showTable extends Component { 
  handleClick  = event => {
    event.preventDefault();
    let table = {};
    table.id= event.target.id;
    this.props.leaveTable(table);
  }
     
  render() { 
    return this.props.table.isTermed ? (
        <div> 
        <Table id={this.props.table.id} buyin= {this.props.table.buyin} 
        capacity={this.props.table.capacity} size={this.props.table.size} 
         amount ={this.props.table.amount} hands={this.props.table.hands} />
         </div>
      ) : 
      (
        <div>
          <div className="rightside-with-scroll">
          <h3>Add a New Hand</h3>
         <AddHand />
         </div>
         <div className="leftside">
         <EndButton id={this.props.table.id} onClick={this.handleClick}>Leave This Table</EndButton><br /><br />
         <AddTagsForm table={this.props.table} />
        <Table id={this.props.table.id} buyin= {this.props.table.buyin} handCount={this.props.table.hands.length}
        capacity={this.props.table.capacity} size={this.props.table.size} 
         amount= "That depends on you my son" hands={this.props.table.hands} />
        </div>
        <div className= "clear"></div>
         </div>
      );
    }
  }

function mapStateToProps(state){ 
  return {table: state.TablesReducer.table}
}

export default connect(mapStateToProps, { leaveTable }) (showTable);