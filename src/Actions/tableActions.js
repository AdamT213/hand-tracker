import fetch from 'isomorphic-fetch';
import { history } from '../App'

export function saveTable(table){ 
  return function(dispatch, getState){ 
    dispatch({type: 'CREATE_TABLE'})
    return fetch('https://hand-trackerapi.herokuapp.com/api/tables', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(table)})
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_TABLE_AFTER_CREATION', payload: responseJson})
    }).then(res => {
      let currentSession = getState().SessionsReducer.session 
      let currentTable = getState().TablesReducer.table
      history.push(`/session/${currentSession.id}/table/${currentTable.id}`) 
    })
  }
}

export function setCurrentTable(table){ 
  return function(dispatch, getState){ 
    dispatch({type: 'GET_TABLE'})
    return fetch(`https://hand-trackerapi.herokuapp.com/api/table/${table.id}`, {
    method: 'GET',
    })
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_TABLE', payload: responseJson})
    }).then(res => { 
      let currentSession = getState().SessionsReducer.session 
      let currentTable = getState().TablesReducer.table 
      history.replace(`/session/${currentSession.id}/table/${currentTable.id}`)
    })
  }
}

export function leaveTable(table){
  return function(dispatch, getState){
    dispatch({type: 'END_TABLE'})
    return fetch(`https://hand-trackerapi.herokuapp.com/api/table/${table.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(table)})
    .then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({type: 'SET_TABLE', payload: responseJson})
    }).then(res => {
      let currentSession = getState().SessionsReducer.session
      history.push(`/session/${currentSession.id}`)
    })
  }
} 
