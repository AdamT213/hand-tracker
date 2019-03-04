import React, { Component } from 'react'; 
import styled from "styled-components";

const Div = styled.div` 
  color: ${props => props.status === "won" ? "black" : "#f61408"};
  `;

const Tag = styled.a`
  display: inline-block;
  :link, :visited {
	  color: black;
	}
	:hover {
	  color: #7fff00;
	}
`;

export class HandName extends Component {  

	//Shows just the basic info for a hand that should be seen from the index page
    
	render() {
		const tags = this.props.tags ? this.props.tags.map(tag => { 
			return <Tag>{tag.tag_name}, </Tag>;
		}): <p>No tags yet</p>;
    
		const amount = this.props.status === "won" ? 
			this.props.potSize - this.props.moneyInvested : 
			-(this.props.moneyInvested);
    
		return (
			<Div status={this.props.status}> 
				<h3>Amount: ${amount}</h3>
				<h3>potSize: ${this.props.potSize}</h3>
				<h3>Tags:</h3>
				<div>
					{tags}
				</div><br />
			</Div>
		);
	}
}

export default HandName;