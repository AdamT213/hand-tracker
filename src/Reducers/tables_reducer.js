export function TablesReducer(state = {table: null, tables: []
}, action) {
  switch (action.type) { 
      case 'SET_TABLE':  
        return {table: {id: action.payload.id, buyin: action.payload.buyin, capacity: action.payload.capacity, size: action.payload.size, hands: action.payload.hands}, tables: state.tables} 
      default:
       return state; 
  }
} 