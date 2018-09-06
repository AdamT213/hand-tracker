import React, { Component } from 'react';
import { connect } from 'react-redux';
import HandName from './HandName';
import { setCurrentHand } from '../../Actions/handActions';

export class Table extends Component {

  handleClick = event => {
    event.preventDefault();
    let hand = {};
    hand.id= event.target.id;
    this.props.setCurrenthand(hand);   
  } 
    
  render() {

    const hands = this.props.hands != undefined ? this.props.hands.map((hand, index) => { 
      debugger;
      return <div><HandName Id={hand.id} potSize={hand.potSize} status={hand.status === true ? "won" : "lost"} key={index}/><button id={hand.id} onClick={this.handleClick}>View Hand Details</button></div>}) : null
    
      return ( 
        <div className= "Table"> 
          <h3>Id: {this.props.id}</h3>
          <h3>buyin: {this.props.buyin}</h3>
          <h3>capacity:<div> {this.props.capacity}</div></h3>
          <h3>size: {this.props.size}</h3>
          <ul>
          {hands}
        </ul>
        </div>
      )
     }
  }

  export default connect(null, { setCurrentHand })(Table);
