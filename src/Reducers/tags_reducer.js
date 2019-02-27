/* eslint-disable no-case-declarations */
export function TagsReducer(state = {tag: null, tags: []
}, action) {
	switch (action.type) { 
	case "SET_TAG_AFTER_CREATION": 
		let tag = action.payload;
		return {tag: {id: tag.id, name: tag.name}, tags: state.tags.concat(tag)};
	case "SET_TAG": 
		tag = action.payload;
		return {tag: {id: tag.id, name: tag.name}, tags: state.tags.concat(tag)};
	default:
		return state; 
	}
} 