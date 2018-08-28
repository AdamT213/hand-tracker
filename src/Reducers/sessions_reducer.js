export function SessionsReducer(state = {session: null, sessions: []
}, action) {
  switch (action.type) { 
      case 'CREATE_SESSION':  
        return {session: action.payload} 
      default:
       return state; 
  }
} 