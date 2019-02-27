import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import { saveTable } from '../../Actions/tableActions';
import { InfoButton } from "../Presentational/styles";

export class AddTable extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      buyin: '',
      capacity: '',
      size: '',
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = event => { 
    const table = Object.assign({}, this.state); 
    table.session_id = this.props.session.id;
    event.preventDefault();
    this.props.saveTable(table);   
    this.setState({
      buyin: '',
      capacity: '',
      size: '',
    });
  }

  render() { 

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                      <label htmlFor="buyin" className="col-md-4 control-label">Buy-in</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="buyin"
                          value={this.state.buyin}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="capacity" className="col-md-4 control-label">Table Capacity</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="capacity"
                          value={this.state.capacity}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="size" className="col-md-4 control-label">Actual Table Size</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="size"
                          value={this.state.size}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-4">
                        <InfoButton type="submit" className="btn btn-default">Good Luck!</InfoButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
      ); 
    }
  }
  
  function mapStateToProps(state){ 
    return {session: state.SessionsReducer.session}
  } 

export default connect(mapStateToProps, { saveTable })(AddTable);