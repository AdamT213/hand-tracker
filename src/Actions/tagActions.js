import fetch from "isomorphic-fetch"; 

export default function saveHandTag(tag){
	tag = Object.assign({}, {name: tag});
	return function(dispatch, getState){ 
		dispatch({type: "CREATE_TAG"});
		return fetch("https://hand-trackerapi.herokuapp.com/api/tags", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(tag)})
			.then(res => {
				return res.json();
			}) 
			.then((responseJson) => { 
				dispatch({type: "SET_TAG_AFTER_CREATION", payload: responseJson});
			})
			.then(() => {
				let currentTag = getState().TagsReducer.tag.id;
				let currentHand = getState().HandsReducer.hand.id;
				let tag = {hand_id: currentHand, tag_id: currentTag};
				fetch("https://hand-trackerapi.herokuapp.com/api/hands_tags", {
					method: "POST",
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					},
					body: JSON.stringify(tag)})
					.then(res => {
						return res.json(); 
					});
			});
	};
}