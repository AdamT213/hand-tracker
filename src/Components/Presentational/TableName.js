import React, { Component } from "react"; 

export class TableName extends Component {  

	//shows just the basic info for a table that should be seen from the index page
    
	render() { 
    
		return (   
			<div className= "TableName"> 
				<h3>Id: {this.props.Id}</h3>
				<h3>buyin: {this.props.buyin}</h3>
				<h3>capacity: {this.props.capacity}</h3>
				<h3>size: {this.props.size}</h3>
			</div>
		);
	}
}

export default TableName;