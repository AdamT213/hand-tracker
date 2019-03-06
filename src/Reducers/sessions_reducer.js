export function SessionsReducer(state = {session: null, sessions: [], data: null, loading: true
}, action) {
	switch (action.type) {
	case "SET_DATA": 
		return {data: action.payload, loading: false};
	case "SET_SESSION":
		return {session: {id: action.payload.session.id, status: null, 
			duration: null, amount: null, isTermed: false, tables: null, created_at: action.payload.session.created_at}, sessions: state.sessions, data: state.data};
	case "SET_SESSIONS":
		return {session: state.session, sessions: action.payload, data: state.data};
	case "SET_SESSION_WITH_TABLES":
		return {session: {
			id: action.payload.id, status: action.payload.status,
			duration: action.payload.duration, amount: action.payload.amount, 
			isTermed: action.payload.isTermed, created_at: action.payload.created_at, tables: action.payload.tables, tags: action.payload.sessions_tags}, 
		sessions: state.sessions, data: state.data};
	case "DELETE_SESSION": 
		return state;
	default:
		return state;
	}
}