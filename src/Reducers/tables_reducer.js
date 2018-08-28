export function TablesReducer(state = {table: null, tables: []
}, action) {
  switch (action.type) { 
      case 'CREATE_TABLE':  
        return {table: action.payload} 
      default:
       return state; 
  }
} 