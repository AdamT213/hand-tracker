import React, { Component } from "react"; 
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

const Div = styled.div`
	  display: inline-block;
	  border-style: groove;
	  border-color: green; 
	  margin-bottom: 1%;
`;

const tags = props => {
	return props.tags[0] ? props.tags.map(tag => {
		return <Tag>{tag.tag_name}, </Tag>;
	}) 
		: <p>No tags yet</p>;
};

export class TableName extends Component {  

	//shows just the basic info for a table that should be seen from the index page
    
	render() { 
    
		return (   
			<div className= "TableName"> 
				<h3>Buy-in: {this.props.buyin}</h3>
				<h3>Capacity: {this.props.capacity}</h3>
				<h3>Size: {this.props.size}</h3>
				<h3>Tags</h3>
				<Div>
					{tags(this.props)}
				</Div>
			</div>
		);
	}
}

export default TableName;