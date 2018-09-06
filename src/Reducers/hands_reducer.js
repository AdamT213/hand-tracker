export function HandsReducer(state = {hand: null, hands: []
}, action) {
  switch (action.type) { 
      case 'SET_HAND':
        return {hand: {id: action.payload.hand.id, flop: action.payload.hand.flop, flopBet: action.payload.hand.flopBet, holeCards: action.payload.hand.holeCards, playersToFlop: action.payload.hand.playersToFlop, playersToTurn: action.payload.hand.playersToTurn, playersToRiver: action.payload.hand.playersToRiver, playersToShowdown: action.payload.hand.playersToShowdown, position: action.payload.hand.position, potSize: action.payload.hand.potSize, preFlopRaise: action.payload.hand.preFlopRaise, river: action.payload.hand.river, riverBet: action.payload.hand.riverBet, status: action.payload.hand.status,table_id: action.payload.hand.table_id, turn: action.payload.hand.turn, turnBet: action.payload.hand.turnBet}, hands: state.hands.concat(action.payload.hand)} 
      default:
       return state; 
  }
} 