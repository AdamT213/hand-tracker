import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' 
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Table from './Presentational/Table'
import AddHand from './Forms/AddHand' 

export class showTable extends Component { 
     
  render() {
      return (
        <div> 
        <Table id={this.props.table.id} buyin= {this.props.table.buyin} capacity={this.props.table.capacity} size={this.props.table.size} hands={this.props.table.hands} />
        <p>Add a New Hand</p>
         <AddHand />
         </div>
      );
    }
  }

function mapStateToProps(state){ 
  debugger;
  return {table: state.TablesReducer.table}
}

export default connect(mapStateToProps, null) (showTable);