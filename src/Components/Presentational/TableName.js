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
background: #f61408;
color: #000000;
display: inline-block;
width: 99%;
padding: 1%;
border-style: inset;
margin-bottom: 2%;
`;

const Divv = styled.div`
	  display: inline-block;
	  border-style: groove;
	  border-color: green; 
	  padding: 1%;
	  margin-bottom: 1%;
`;

const Divvv = styled.div` 
	  margin-bottom: 2%;
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
			<Div> 
				<h3>Buy-in: {this.props.buyin}</h3>
				<h3>Capacity: {this.props.capacity}</h3>
				<h3>Size: {this.props.size}</h3>
				<h3>Tags</h3>
				<Divv>
					{tags(this.props)}
				</Divv>
			</Div>
		);
	}
}

export default TableName;