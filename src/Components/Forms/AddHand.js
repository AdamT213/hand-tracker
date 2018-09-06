import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { saveHand } from '../../Actions/handActions'; 

export class AddHand extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      position: '',
      preFlopRaise: '',
      flopBet: '',
      turnBet: '',
      riverBet: '',
      playersToFlop: '', 
      playersToTurn: '',
      playersToRiver: '',
      playersToShowdown: '', 
      status: '',
      potSize: '',
      holeCards: '',
      flop: '',
      turn: '',
      river: ''
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = event => { 
    event.preventDefault();
    const hand = Object.assign({}, this.state); 
    hand.table_id = this.props.table.id
    this.props.saveHand(hand);   
    this.setState({
      position: '',
      preFlopRaise: '',
      flopBet: '',
      turnBet: '',
      riverBet: '',
      playersToFlop: '', 
      playersToTurn: '',
      playersToRiver: '',
      playersToShowdown: '', 
      status: '',
      potSize: '',
      holeCards: '',
      flop: '',
      turn: '',
      river: ''
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
                      <label htmlFor="holeCards" className="col-md-4 control-label">What were your hole cards?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="holeCards"
                          value={this.state.holeCards}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label htmlFor="position" className="col-md-4 control-label">Position</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="position"
                          value={this.state.position}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="preFlopRaise" className="col-md-4 control-label">Preflop Raise</label>
                      <div className="col-md-5">
                        <textarea
                          className="form-control"
                          name="preFlopRaise"
                          value={this.state.preFlopRaise}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="playersToFlop" className="col-md-4 control-label">How many players saw the flop?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="playersToFlop"
                          value={this.state.playersToFlop}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label htmlFor="flop" className="col-md-4 control-label">What was the flop?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="flop"
                          value={this.state.flop}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label htmlFor="flopBet" className="col-md-4 control-label">Flop Bet</label>
                      <div className="col-md-5">
                        <textarea
                          className="form-control"
                          type="text"
                          name="flopBet"
                          value={this.state.flopBet}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="playersToTurn" className="col-md-4 control-label">How many players saw the turn?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="playersToTurn"
                          value={this.state.playersToTurn}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label htmlFor="turn" className="col-md-4 control-label">What was the turn?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="turn"
                          value={this.state.turn}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label htmlFor="turnBet" className="col-md-4 control-label">Turn Bet</label>
                      <div className="col-md-5">
                        <textarea
                          className="form-control"
                          type="text"
                          name="turnBet"
                          value={this.state.turnBet}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="playersToRiver" className="col-md-4 control-label">How many players saw the river?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="playersToRiver"
                          value={this.state.playersToRiver}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label htmlFor="river" className="col-md-4 control-label">What was the river?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="river"
                          value={this.state.river}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label htmlFor="riverBet" className="col-md-4 control-label">River Bet</label>
                      <div className="col-md-5">
                        <textarea
                          className="form-control"
                          type="text"
                          name="riverBet"
                          value={this.state.riverBet}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="playersToShowdown" className="col-md-4 control-label">How many players went to a showdown?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="playersToShowdown"
                          value={this.state.playersToShowdown}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label htmlFor="status" className="col-md-4 control-label">Did you win the hand(Y/N)</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="status"
                          value={this.state.status}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label htmlFor="potSize" className="col-md-4 control-label">How big was the pot?</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="potSize"
                          value={this.state.potSize}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div> 
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-4">
                        <button type="submit" className="btn btn-default">Good Luck!</button>
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
    return {table: state.TablesReducer.table}
  } 

export default connect(mapStateToProps, { saveHand })(AddHand);