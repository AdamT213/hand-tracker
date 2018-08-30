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
      dispatch({type: 'SET_TABLE', payload: responseJson}) 
    }).then(res => {  
      let currentSession = getState().SessionsReducer.session 
      let currentTable = getState().TablesReducer.table
      debugger;
      history.push(`/session/${currentSession.id}/table/${currentTable.id}`)  
    })
  } 
}  