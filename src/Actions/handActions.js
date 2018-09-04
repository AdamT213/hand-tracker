import fetch from 'isomorphic-fetch';
import { history } from '../App';

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
      let currentSession = getState().SessionsReducer.session 
      let currentTable = getState().TablesReducer.table
      history.push(`/session/${currentSession.id}/table/${currentTable.id}`)  
    })
  } 
}  

export function setCurrentHand(hand){
  return function(dispatch, getState){
    dispatch({type: 'GET_HAND'})
    return fetch(`https://hand-trackerapi.herokuapp.com/api/hand/${hand.id}`, {
    method: 'GET',
    })
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_HAND', payload: responseJson})
    }).then(res => {
      let currentHand = getState().HandsReducer.hand
      history.push(`/hand/${currentHand.id}`)
    })
  }
}