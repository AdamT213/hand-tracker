import React, { Component } from 'react';
import styled from "styled-components";

const Tag = styled.a`
  display: inline-block;
  :link, :visited {
	  color: black;
	}
	:hover {
	  color: #7fff00;
	}
`;

export class Hand extends Component {  
    
	render() {

		const tags = this.props.tags != undefined ? this.props.tags.map(tag => {
			return <Tag>{tag.tag_name}, </Tag>;}) : <p>No tags yet</p>;
    
		return (   
			<div className= "Hand">
				<h3>holeCards: {this.props.holeCards}</h3>
				<h3>position: {this.props.position}</h3>
				<h3>preFlopRaise:<div> {this.props.preFlopRaise}</div></h3>
				<h3>playersToFlop: {this.props.playersToFlop}</h3>
				<h3>flop: {this.props.flop}</h3>
				<h3>flopBet: {this.props.flopBet}</h3>
				<h3>playersToTurn: {this.props.playersToTurn}</h3>
				<h3>turn: {this.props.turn}</h3>
				<h3>turnBet: {this.props.turnBet}</h3>
				<h3>playersToRiver: {this.props.playersToRiver}</h3>
				<h3>river: {this.props.river}</h3>
				<h3>riverBet: {this.props.riverBet}</h3>
				<h3>playersToShowdown: {this.props.playersToShowdown}</h3>
				<h3>potSize: {this.props.potSize}</h3>
				<h3>status: {this.props.status ? "Won" : "Lost"}</h3>
				<h3>tags</h3>
				<div>
					{tags}
				</div>
			</div>
		);
	}
}

export default Hand;