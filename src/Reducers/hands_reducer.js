export function HandsReducer(state = {hand: null, hands: []
}, action) {
  switch (action.type) { 
      case 'SET_HAND':
        debugger;
        return {hand: action.payload, hands: state.hands.concat(action.payload)} 
      default:
       return state; 
  }
} 