import fetch from "isomorphic-fetch";
import { history } from "../App";

export function saveHand(hand, tags){
	return function(dispatch, getState){ 
		dispatch({type: "CREATE_HAND"});
		return fetch("https://hand-trackerapi.herokuapp.com/api/hands", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(hand)})
			.then(res => {
				return res.json(); 
			})
			.then((responseJson) => {
				dispatch({type: "SET_HAND_AFTER_CREATION", payload: responseJson});
			}) 
			.then(() =>{ 
				if (tags.length) {
					tags.forEach(tag => {
						tag = Object.assign({}, {name: tag});
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
								let currentTag = getState().TagsReducer.tag;
								let currentHand = getState().HandsReducer.hand.id;
								let tag = {hand_id: currentHand, tag_id: currentTag.id, tag_name: currentTag.name};
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
					});
				}
			})
			.then(() => {
				let currentSession = getState().SessionsReducer.session;
				let currentTable = getState().TablesReducer.table;
				history.push(`/session/${currentSession.id}/table/${currentTable.id}`);
			});
	};
}

export function setCurrentHand(hand){
	return function(dispatch, getState){
		dispatch({type: "GET_HAND"});
		return fetch(`https://hand-trackerapi.herokuapp.com/api/hand/${hand.id}`, {
			method: "GET",
		})
			.then(res => {
				return res.json();
			}).then(responseJson => {
				dispatch({type: "SET_HAND", payload: responseJson});
			}).then(() => {
				let currentSession = getState().SessionsReducer.session;
				let currentTable = getState().TablesReducer.table;
				let currentHand = getState().HandsReducer.hand;
				history.push(`/session/${currentSession.id}/table/${currentTable.id}
				/hand/${currentHand.id}`);
			});
	};
} 
