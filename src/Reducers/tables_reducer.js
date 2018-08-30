export function TablesReducer(state = {table: null, tables: []
}, action) {
  switch (action.type) { 
      case 'SET_TABLE':  
        return {table: {id: action.payload.id}, tables: state.tables} 
      default:
       return state; 
  }
} 