import React, { Component } from 'react'; 
import styled from "styled-components";

const Tag = styled.a`
	display: inline-block;
	:link, :visited {
		color: black;
	  }
	  :hover {
		color: #7fff00;
	  }
`;

const tags = props => { 
	return props.tags[0] ? props.tags.map(tag => {
		return <Tag>{tag.tag_name}</Tag> + ",";
	}) 
		: <p>No tags yet</p>;
};

const date = props => { 
	return new Date(props.created_at).toDateString();
};

export class SessionName extends Component {  

	//shows just the basic info for a session that should be seen from the index page
    
	render() {
		return (
			<div className= "SessionName"> 
				<h3>Date: {date(this.props)}</h3>
				<h3>Minutes: {this.props.Minutes}</h3>
				<h3>Status: {this.props.Status}</h3>
				<h3>Amount: ${this.props.Amount}</h3> 
				<h3>Tags</h3>
				<div>
					{tags(this.props)}
				</div>
			</div>
		);
	}
}

export default SessionName;