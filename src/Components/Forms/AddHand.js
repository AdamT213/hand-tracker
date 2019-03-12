import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { saveHand } from '../../Actions/handActions'; 
import { InfoButton } from "../Presentational/styles";

export class AddHand extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      position: null,
      preFlopRaise: null,
      flopBet: null,
      turnBet: null,
      riverBet: null,
      playersToFlop: null, 
      playersToTurn: null,
      playersToRiver: null,
      playersToShowdown: null, 
      status: null, 
      money_invested: null,
      potSize: null,
      holeCards: null,
      flop: null,
      turn: null,
      river: null,
      tags: [],
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
    const hand = {position: this.state.position, preFlopRaise: this.state.preFlopRaise, 
      flopBet: this.state.flopBet, turnBet: this.state.turnBet, riverBet: this.state.riverBet, 
      playersToFlop: this.state.playersToFlop, playersToTurn: this.state.playersToTurn, 
      playersToRiver: this.state.playersToRiver, playersToShowdown:this.state.playersToShowdown,
      status: this.state.status, money_invested: this.state.money_invested, potSize: this.state.potSize, holeCards: this.state.holeCards, 
      flop: this.state.flop, turn: this.state.turn, river: this.state.river}; 
      let tags;
      if (this.state.tags.length) { 
        tags = this.state.tags.split(",");
      }
      else { 
        tags = this.state.tags;
      }
      hand.table_id = this.props.table.id;
      this.props.saveHand(hand, tags);
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
        money_invested: '',
        potSize: '',
        holeCards: '',
        flop: '',
        turn: '',
        river: '', 
        tags: []
    });
  }

  render() { 

      return (
        
        <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="holeCards">What were your hole cards?</label>
              <div>
                <input
                className="form-control"
                type="text"
                name="holeCards"
                value={this.state.holeCards}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="position">Position</label>
              <div>
                <input
                className="form-control"
                name="position"
                value={this.state.position}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="preFlopRaise">Preflop Raise</label>
              <div>
                <textarea
                className="form-control"
                name="preFlopRaise"
                value={this.state.preFlopRaise}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToFlop">How many players saw the flop?</label>
              <div>
              <input
                className="form-control"
                type="text"
                name="playersToFlop"
                value={this.state.playersToFlop}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="flop">What was the flop?</label>
              <div>
                <input
                className="form-control"
                type="text"
                name="flop"
                value={this.state.flop}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="flopBet">Flop Bet</label>
              <div>
                <textarea
                className="form-control"
                type="text"
                name="flopBet"
                value={this.state.flopBet}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToTurn">How many players saw the turn?</label>
              <div>
              <input
                className="form-control"
                type="text"
                name="playersToTurn"
                value={this.state.playersToTurn}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="turn">What was the turn?</label>
              <div>
                <input
                className="form-control"
                type="text"
                name="turn"
                value={this.state.turn}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="turnBet">Turn Bet</label>
              <div>
                <textarea
                className="form-control"
                type="text"
                name="turnBet"
                value={this.state.turnBet}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToRiver">How many players saw the river?</label>
              <div>
              <input
                className="form-control"
                type="text"
                name="playersToRiver"
                value={this.state.playersToRiver}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="river">What was the river?</label>
              <div>
                <input
                className="form-control"
                type="text"
                name="river"
                value={this.state.river}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="riverBet">River Bet</label>
              <div>
                <textarea
                className="form-control"
                type="text"
                name="riverBet"
                value={this.state.riverBet}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToShowdown">How many players went to a showdown?</label>
              <div>
              <input
                className="form-control"
                type="text"
                name="playersToShowdown"
                value={this.state.playersToShowdown}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="status">Did you win the hand(Y/N)</label>
              <div>
                <input
                className="form-control"
                type="text"
                name="status"
                value={this.state.status}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="money_invested">How much money did you put in?</label>
              <div>
              <input
                className="form-control"
                type="text"
                name="money_invested"
                value={this.state.money_invested}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="potSize">How big was the pot?</label>
              <div>
                <input
                className="form-control"
                type="text"
                name="potSize"
                value={this.state.potSize}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
            <div>
              <label htmlFor="tags">How would you like to tag this hand? (comma-sep list)</label>
              <div>
              <input
                className="form-control"
                type="text"
                name="tags"
                value={this.state.tags}
                onChange={this.handleOnChange}
              />
              </div>
              </div>
              <InfoButton type="submit">Good Luck!</InfoButton>
        </form>
      ); 
    }
  }

  function mapStateToProps(state){ 
    return {table: state.TablesReducer.table}
  };

export default connect(mapStateToProps, { saveHand })(AddHand);