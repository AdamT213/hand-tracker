/* eslint-disable no-case-declarations */
export function HandsReducer(state = {hand: null, hands: []
}, action) {
	switch (action.type) {
	case "SET_HAND_AFTER_CREATION": 
		let hand = action.payload.hand;
		return {hand: {
			id: hand.id, flop: hand.flop, flopBet: hand.flopBet, holeCards: hand.holeCards, playersToFlop: hand.playersToFlop, playersToTurn: hand.playersToTurn, playersToRiver: hand.playersToRiver, playersToShowdown: hand.playersToShowdown, position: hand.position, potSize: hand.potSize, preFlopRaise: hand.preFlopRaise, river: hand.river, riverBet: hand.riverBet, status: hand.status, moneyInvested: hand.money_invested, table_id: hand.table_id, turn: hand.turn, turnBet: hand.turnBet, tags: []}, 
		hands: state.hands.concat(state.hand)};
	case "SET_HAND":
		hand = action.payload;
		return {hand:
			{id: hand.id, flop: hand.flop, flopBet: hand.flopBet, holeCards: hand.holeCards, playersToFlop: hand.playersToFlop, playersToTurn: hand.playersToTurn, playersToRiver: hand.playersToRiver, playersToShowdown: hand.playersToShowdown, position: hand.position, potSize: hand.potSize, preFlopRaise: hand.preFlopRaise, river: hand.river, riverBet: hand.riverBet, status: hand.status, moneyInvested: hand.money_invested, table_id: hand.table_id, turn: hand.turn, turnBet: hand.turnBet, tags: hand.hands_tags}, 
		hands: state.hands};
	default:
		return state;
	}
} 