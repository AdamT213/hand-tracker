import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"; 
import { startSession } from '../Actions/sessionActions' 
import { fetchLastMonthData } from "../Actions/sessionActions"
import { HomeButton } from "./Presentational/styles"
import { SearchTags } from "./Forms/SearchTags"
import { Last30Days } from './Visualizations/Last30Days';
import styles from 'styled-components';
import { ClipLoader } from 'react-spinners';

const Div = styles.div` 
  float: left; 
`;

export class Home extends Component { 

  handleClick = event => {  
    this.props.startSession() 
  } 

  componentDidMount() { 
    this.props.fetchLastMonthData();
  }
     
  render() {  
      return this.props.loading ? ( 
        <div>
          <Router>
          <Switch>
          <div>
          <HomeButton onClick={this.handleClick}>Start New Session</HomeButton><br />
          <SearchTags />
          <Div>
            <h3>Last 30 Days</h3>
            <ClipLoader
            sizeUnit={"px"}
            size={150}
            loading={this.props.loading}
          />
          </Div>
          </div>
          </Switch>
          </Router>
        </div>) :
        (<div> 
          <Router> 
          <Switch> 
          <div>
          <HomeButton onClick={this.handleClick}>Start New Session</HomeButton><br />
          <SearchTags />
          <Div>
            <h3>Last 30 Days</h3>
          <Last30Days 
          data={this.props.data}
          height={200}
          selectX={datum => new Date(datum.date)}
          selectY={datum => datum.amount}
          width={400}
          margin={40} />
          </Div>
          </div>
          </Switch>
          </Router>
        </div>
      );
  }
}

function mapStateToProps(state){
  return {data: state.SessionsReducer.data, loading: state.SessionsReducer.loading}
} 

export default connect (mapStateToProps, { startSession, fetchLastMonthData})(Home); 