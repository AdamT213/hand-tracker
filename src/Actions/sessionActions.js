import fetch from "isomorphic-fetch";
import { history } from "../App";

export function startSession(){ 
	return function(dispatch, getState){ 
		dispatch({type: "CREATE_SESSION"});
		return fetch("https://hand-trackerapi.herokuapp.com/api/sessions", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
		}) 
			.then(res => {
				return res.json();
			}).then(responseJson => {
				dispatch({type: "SET_SESSION", payload: responseJson}); 
			}).then(() => {
				let currentSession = getState().SessionsReducer.session;
				history.push(`/session/${currentSession.id}`);
			});
	}; 
}   

export function getSessions() {

	return function(dispatch){ 
		dispatch({type: "GET_SESSIONS"});
		return fetch("https://hand-trackerapi.herokuapp.com/api/sessions", {
			method: "GET",
		}).then(res => {
			return res.json();
		}).then(responseJson => {
			dispatch({type: "SET_SESSIONS", payload: responseJson});     
		}).then(() => {
			history.push("/sessions/index");
		});
	};
}

export function setCurrentSession(session){
	return function(dispatch, getState){
		dispatch({type: "GET_SESSION"});
		return fetch(`https://hand-trackerapi.herokuapp.com/api/session/${session.id}`, {
			method: "GET",
		})
			.then(res => {
				return res.json();
			}).then(responseJson => {
				dispatch({type: "SET_SESSION_WITH_TABLES", payload: responseJson});
			}).then(() => {
				let currentSession = getState().SessionsReducer.session;
				history.push(`/session/${currentSession.id}`);
			});
	};
}

export function endSession(session){
	return function(dispatch, getState){
		dispatch({type: "END_SESSION"});
		return fetch(`https://hand-trackerapi.herokuapp.com/api/session/${session.id}`, {
			method: "PATCH",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(session)})
			.then(res => {
				return res.json();
			}).then(responseJson => {
				dispatch({type: "SET_SESSION_WITH_TABLES", payload: responseJson});
			}).then(()=> {
				let currentSession = getState().SessionsReducer.session;
				history.push(`/session/${currentSession.id}`);
			}).catch(() => alert("1 or more open tables. Please leave all open tables and try again."));
	};
}  

export function deleteSession(session){
	return function(dispatch){
		dispatch({type: "DELETE_SESSION"});
		return fetch(`https://hand-trackerapi.herokuapp.com/api/session/${session.id}`, {
			method: "DELETE",
		})
			.then(res => {
				return res.json();
			}).then(() => {
				history.push("/");
			});
	};
}

export function saveSessionTags(tags, session_id){
	return function(dispatch, getState){
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
				}) .catch(() => alert("try typing some text, dawg!"))
				.then((responseJson) => { 
					dispatch({type: "SET_TAG_AFTER_CREATION", payload: responseJson});
				})
				.then(() => {
					let currentTag = getState().TagsReducer.tag;
					let tag = {session_id: session_id, tag_id: currentTag.id, tag_name: currentTag.name};
					fetch("https://hand-trackerapi.herokuapp.com/api/sessions_tags", {
						method: "POST",
						headers: {
							"Accept": "application/json",
							"Content-Type": "application/json"
						},
						body: JSON.stringify(tag)})
						.then(res => {
							return res.json(); 
						}).catch(() => alert("There was an error. Try again"));
				});
		});
	};
} 

export function fetchLastMonthData() { 
	return function(dispatch){
		return fetch("https://hand-trackerapi.herokuapp.com/api/last30Days", {
			method: "GET",
		}).then(res => {
			return res.json();
		}).then(responseJson => {
			dispatch({type: "SET_DATA", payload: responseJson});
		});
	};
}