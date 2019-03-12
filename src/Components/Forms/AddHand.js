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

  componentDidMount() { 
    this.refs.content.elements[0].focus();
  }

  handleKeyPress = event => {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    let next = form.elements[index + 1];
    let last = form.elements[index - 1]; 
    switch (event.keyCode) {
    case 39: 
      event.preventDefault();
      if (next && next.tagName === "INPUT" || next.tagName === "TEXTAREA" || next.tagName === "SELECT") {
        form.elements[index + 1].focus();
      }
      break;
    case 37:
        event.preventDefault();
        if (last && last.tagName === "INPUT" || last.tagName === "TEXTAREA" || last.tagName === "SELECT") { 
          form.elements[index - 1].focus();
        }
        break;
    case 16:
      if (index < 13) { 
        form.elements[13].focus();
      }
      break;
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleChange = event => {
    this.setState({value: event.target.value});
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
        
        <form ref="content" onSubmit={this.handleOnSubmit}>
         <div>
              <label htmlFor="position">Position</label>
              <div>
              <select value={this.state.position} onChange={this.handleChange} onKeyDown={this.handleKeyPress}>
                <option value="Button">Button</option>
                <option value="SB">SB</option>
                <option value="BB">BB</option>
                <option value="UTG">UTG</option>
                <option value="MP">MP</option>
                <option value="Hi Jack">Hi Jack</option>
                <option value="CO">CO</option>
              </select>
              </div>
              </div>
            <div>
              <label htmlFor="holeCards">What were your hole cards?</label>
              <div>
                <input
                type="text"
                name="holeCards"
                value={this.state.holeCards}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="preFlopRaise">Preflop Raise</label>
              <div>
                <textarea
                name="preFlopRaise"
                value={this.state.preFlopRaise}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToFlop">How many players saw the flop?</label>
              <div>
              <input
                type="text"
                name="playersToFlop"
                value={this.state.playersToFlop}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="flop">What was the flop?</label>
              <div>
                <input
                type="text"
                name="flop"
                value={this.state.flop}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="flopBet">Flop Bet</label>
              <div>
                <textarea
                type="text"
                name="flopBet"
                value={this.state.flopBet}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToTurn">How many players saw the turn?</label>
              <div>
              <input
                type="text"
                name="playersToTurn"
                value={this.state.playersToTurn}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="turn">What was the turn?</label>
              <div>
                <input
                type="text"
                name="turn"
                value={this.state.turn}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="turnBet">Turn Bet</label>
              <div>
                <textarea
                type="text"
                name="turnBet"
                value={this.state.turnBet}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToRiver">How many players saw the river?</label>
              <div>
              <input
                type="text"
                name="playersToRiver"
                value={this.state.playersToRiver}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="river">What was the river?</label>
              <div>
                <input
                type="text"
                name="river"
                value={this.state.river}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="riverBet">River Bet</label>
              <div>
                <textarea
                type="text"
                name="riverBet"
                value={this.state.riverBet}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="playersToShowdown">How many players went to a showdown?</label>
              <div>
              <input
                type="text"
                name="playersToShowdown"
                value={this.state.playersToShowdown}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="status">Did you win the hand?</label>
              <div>
              <select value={this.state.status} onChange={this.handleChange} onKeyDown={this.handleKeyPress}>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              </div>
              </div>
            <div>
              <label htmlFor="money_invested">How much money did you put in?</label>
              <div>
              <input
                type="text"
                name="money_invested"
                value={this.state.money_invested}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="potSize">How big was the pot?</label>
              <div>
                <input
                type="text"
                name="potSize"
                value={this.state.potSize}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
              />
              </div>
              </div>
            <div>
              <label htmlFor="tags">How would you like to tag this hand? (comma-sep list)</label>
              <div>
              <input
                type="text"
                name="tags"
                value={this.state.tags}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyPress}
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