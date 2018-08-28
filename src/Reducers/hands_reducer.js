export function HandsReducer(state = {hand: null, hands: []
}, action) {
  switch (action.type) { 
      case 'CREATE_HAND':  
        return {hand: action.payload} 
      default:
       return state; 
  }
} 