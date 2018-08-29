import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function saveHand(hand){ 
  return function(dispatch, getState){ 
    dispatch({type: 'CREATE_HAND'})
    return fetch('https://hand-trackerapi.herokuapp.com/api/hands', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hand)}) 
    .then(res => { 
      return res.json()
    }).then(responseJson => {   
      dispatch({type: 'SET_HAND', payload: responseJson}) 
    }).then(res => {  
      let currentSession = getState().sessionsReducer.session
      history.push(`/session/${currentSession.id}`)  
    })
  } 
}  