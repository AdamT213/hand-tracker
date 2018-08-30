import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App' 
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Session from './Presentational/Session' 
import Table from './Presentational/Table'
import AddHand from './Forms/AddHand' 

export class showTable extends Component { 
     
  render() { 

      return ( 
        <div> 
        <Table id={this.props.table.id} Buy-in= {this.props.table.buyin} Capacity={this.props.table.capacity} Size= {this.props.table.size} hands={this.props.table.hands} /> 
        <p>Add a New Hand</p>
         <AddHand />  
         </div>
      ); 
    }
  }

function mapStateToProps(state){ 
  return {table: state.TablesReducer.table}
}

export default connect(mapStateToProps, null) (showTable); 