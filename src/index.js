import React from "react";
import ReactDOM from "react-dom"; 
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import rootReducer from "./Reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);


ReactDOM.render(
	<Provider store={store}> 
		<App /> 
	</Provider>,
	document.getElementById("root"));

registerServiceWorker();