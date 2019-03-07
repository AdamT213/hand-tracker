import React, { Component } from "react";
import "./App.css"; 
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import showSession from "./Components/showSession"; 
import showTable from "./Components/showTable";
import showHand from "./Components/showHand";
import sessionsList from "./Components/sessionsList";
import styles from "styled-components";

export const history = createBrowserHistory();

const FadingHeader = styles.header`
  background-color: black;
  color: #7fff00;
  height: ${props => props.animation ? "150px" : "75px"}
  padding: ${props => props.animation ? "20px" : "7px"}
`;

const H1FadeInLeft = styles.h1`
  font-size: 1.5em;
  animation-duration: 3s;
  animation-name: slidein-right;
`;

const H1FadeInRightDisappear = styles.h1`
  font-size: 1.5em; 
  animation-delay: 3s;
  animation-duration: 3s;
  visibility: hidden;
  animation-name: slidein-left;
`;

const H1FadeInLeftDisappear = styles.h1`
  font-size: 1.5em; 
  animation-delay: 5s;
  animation-duration: 4s;
  visibility: hidden;
  animation-name: slidein-right;
`;

class App extends Component {
	constructor(){ 
		super();
		this.state={
			animation: true,
		};
	}
  
	componentDidMount(){
		setTimeout(() => {
			return this.setState({
				animation: false
			});
		}, 10000);
	}

	render(){

		document.title = "Wilkommen";
    
		return (
			<div className="App">
				<FadingHeader animation={this.state.animation}>
					<H1FadeInLeft>Hi Adam, welcome to your Personal Poker Universe!</H1FadeInLeft>
					<H1FadeInRightDisappear className="App-title-middle">Not Adam? GTFO!</H1FadeInRightDisappear>
					<H1FadeInLeftDisappear>Just Kidding, you can stay</H1FadeInLeftDisappear>
				</FadingHeader>
				<Router history= {history}>
					<Switch>
						<div>
							<Navbar/>
							<Route exact path= "/" component= {Home} />  
							<Route exact path= "/session/:id" component= {showSession} /> 
							<Route path= "/sessions/index" component= {sessionsList} /> 
							<Route exact path= "/session/:id/table/:id" component= {showTable}/> 
							<Route path= "/session/:id/table/:id/hand/:id" component= {showHand} />
						</div>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
