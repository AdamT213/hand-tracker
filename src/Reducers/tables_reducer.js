/* eslint-disable no-case-declarations */
export function TablesReducer(state = {table: null, tables: []
}, action) {
	switch (action.type) { 
	case  "SET_TABLE_AFTER_CREATION":  
		let table = action.payload.table;
		return {
			table: {
				id: table.id, session_id: table.session_id, buyin: table.buyin, 
				capacity: table.capacity, size: table.size, 
				hands: table.hands, isTermed: table.isTermed, amount: table.amount
			}, 
			tables: state.tables.concat(table)
		};
	case "SET_TABLE":
		table = action.payload;
		return {
			table: {
				id: table.id, session_id: table.session_id, buyin: table.buyin,
				capacity: table.capacity, size: table.size, 
				hands: table.hands, isTermed: table.isTermed, amount: table.amount, tags: table.tables_tags
			}, 
			tables: state.tables.concat(table)
		};
	default:
		return state; 
	}
} 