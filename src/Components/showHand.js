import React, { Component } from "react";
import { connect } from "react-redux";
import Hand from "./Presentational/Hand";

export class showHand extends Component { 
     
	render() {
    debugger; 
		return ( 
			<div> 
				<Hand id={this.props.hand.id} holeCards={this.props.hand.holeCards} 
					position={this.props.hand.position} 
					preFlopRaise={this.props.hand.preFlopRaise}
					playersToFlop={this.props.hand.playersToFlop}
					flop={this.props.hand.flop} 
					flopBet={this.props.hand.flopBet} 
					playersToTurn={this.props.hand.playersToTurn}
					turn={this.props.hand.turn}
					turnBet={this.props.hand.turnBet}
					playersToRiver={this.props.hand.playersToRiver}
					river={this.props.hand.river}
					riverBet={this.props.hand.riverBet} 
					playersToShowdown={this.props.hand.playersToShowdown}
					potSize={this.props.hand.potSize}
					status={this.props.hand.status}
					tags={this.props.hand.tags} />
			</div>
		);
	}
}

function mapStateToProps(state){ 
	return {hand: state.HandsReducer.hand}
}

export default connect(mapStateToProps, null) (showHand); 