export function SessionsReducer(state = {session: null, sessions: []
}, action) {
  switch (action.type) { 
      case 'SET_SESSION':  
        return {session: {id: action.payload.id, status: null, duration: null, amount: null, tables: null}}
      case 'SET_SESSIONS':  
        return {sessions: action.payload} 
      case 'SET_SESSION_WITH_TABLES': 
        return {session: {id: action.payload.id, status: action.payload.status, duration: action.payload.duration, amount: action.payload.amount, tables: action.payload.tables}, sessions: state.sessions}
      default:
       return state; 
  }
} 