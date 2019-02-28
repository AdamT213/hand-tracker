import React, { Component } from 'react';
import { connect } from 'react-redux';
import Session from './Presentational/Session' ;
import InProgressSession from './Presentational/InProgressSession' ;
import AddTable from './Forms/AddTable';
import { endSession, setCurrentSession } from '../Actions/sessionActions';
import AddTagsForm from './Forms/AddTagsForm';
import { EndButton } from "./Presentational/styles";

const calculateDuration = startTime => { 
    return parseInt(new Date().getTime() - 
    new Date(startTime.toString()).getTime())/60000
}

export class showSession extends Component { 
  constructor(props){ 
    super(props)
      this.state = { 
          duration: this.props.duration
      };
  }

  handleClick = event => {
    event.preventDefault();
    let session = {};
    session.id= event.target.id;
    this.props.endSession(session);
  }

  componentDidMount() {
    if (!this.props.session.isTermed) {
      let duration = calculateDuration(this.props.session.created_at);
      this.setState({
        duration: duration
      });
    }
  }
  
  render() {
      return this.props.session.isTermed ? ( 
        <div>
        <Session Id={this.props.session.id} Status={this.props.session.status} 
        Minutes={this.props.session.duration} Amount={this.props.session.amount}
        tables={this.props.session.tables} />
         </div>
      ) :
      (
        <div>
        <div className= "rightside">
        <p>Add a New Table</p>
        <AddTable />
        </div>
        <div className="leftside">
        <EndButton id={this.props.session.id} onClick={this.handleClick}>End This Session</EndButton><br /><br />
        <AddTagsForm />
        <InProgressSession tables={this.props.session.tables} Minutes={this.state.duration} />
        </div>
        <div className= "clear"></div>
      </div>
      );
    }
  }

function mapStateToProps(state){
  return {session: state.SessionsReducer.session}
}

export default connect(mapStateToProps, { endSession }) (showSession); 