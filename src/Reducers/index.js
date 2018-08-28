import { combineReducers } from 'redux';
import { HandsReducer } from "./hands_reducer"  
import { SessionsReducer } from "./sessions_reducer" 
import { TablesReducer } from "./tables_reducer" 

const rootReducer = combineReducers({
  HandsReducer, SessionsReducer, TablesReducer,
 });
 
 export default rootReducer;