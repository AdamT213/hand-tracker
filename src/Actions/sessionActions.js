import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function startSession(){ 
  return function(dispatch, getState){ 
    dispatch({type: 'CREATE_SESSION'})
    return fetch('https://hand-trackerapi.herokuapp.com/api/sessions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    }) 
    .then(res => { 
      return res.json()
    }).then(responseJson => {
      debugger; 
      dispatch({type: 'SET_SESSION', payload: responseJson}) 
    }).then(res => {  
      let currentSession = getState().SessionsReducer.session 
      history.push(`/session/${currentSession.id}`)  
    })
  } 
}   

export function getSessions() {

  return function(dispatch, getState){ 
    dispatch({type: 'GET_SESSIONS'})
    return fetch('https://hand-trackerapi.herokuapp.com/api/sessions', {
      method: 'GET',
    }).then(res => {
      return res.json() 
    }).then(responseJson => {
      dispatch({type: 'SET_SESSIONS', payload: responseJson})     
    }).then(res => { 
      history.push(`/sessions/index`)
    })
  }
}

export function setCurrentSession(session){
  return function(dispatch, getState){
    dispatch({type: 'GET_SESSION'})
    return fetch(`https://hand-trackerapi.herokuapp.com/api/session/${session.id}`, {
    method: 'GET',
    })
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_SESSION_WITH_TABLES', payload: responseJson})
    }).then(res => {
      let currentSession = getState().SessionsReducer.session
      history.push(`/session/${currentSession.id}`)
    })
  }
} 

export function endSession(session){
  return function(dispatch, getState){
    dispatch({type: 'END_SESSION'})
    return fetch(`https://hand-trackerapi.herokuapp.com/api/session/${session.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(session)})
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_SESSION_WITH_TABLES', payload: responseJson})
    }).then(res => {
      let currentSession = getState().SessionsReducer.session
      history.push(`/session/${currentSession.id}`)
    })
  }
} 
