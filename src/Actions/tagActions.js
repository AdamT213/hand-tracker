import fetch from "isomorphic-fetch"; 

export function saveHandTags(tags){
	tags.forEach(tag => {
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
					dispatch({type: "SET_TAG_AFTER_CREATION"});
					return res.json();  
				}) 
				.then(() => { 
					let currentTag = getState().tagsReducer.tag.id; 
					let currentHand = getState().handsReducer.hand.id;
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
	});
}