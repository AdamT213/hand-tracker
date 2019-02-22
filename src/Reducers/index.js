import { combineReducers } from "redux";
import { HandsReducer } from "./hands_reducer";  
import { SessionsReducer } from "./sessions_reducer"; 
import { TablesReducer } from "./tables_reducer";  
import { TagsReducer } from "./tags_reducer";

const rootReducer = combineReducers({
	HandsReducer, SessionsReducer, TablesReducer, TagsReducer
});
 
export default rootReducer;