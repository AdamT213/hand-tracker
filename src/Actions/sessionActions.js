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
      dispatch({type: 'SET_SESSION', payload: responseJson}) 
    }).then(res => {  
      let currentSession = getState().SessionsReducer.session
      history.push(`/session/${currentSession}`)  
    })
  } 
}  