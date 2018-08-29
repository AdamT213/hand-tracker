export function SessionsReducer(state = {session: null, sessions: []
}, action) {
  switch (action.type) { 
      case 'SET_SESSION':  
        debugger;
        return {session: action.payload} 
      default:
       return state; 
  }
} 