export function SessionsReducer(state = {session: null, sessions: []
}, action) {
  switch (action.type) { 
      case 'SET_SESSION':  
        return {session: {id: action.payload.id, status: null, duration: null, amount: null, tables: null}}
      default:
       return state; 
  }
} 