import React  from "react"; 
import { connect } from 'react-redux';
import { InfoButton } from "./styles";
import TableName from "./TableName";
import { setCurrentTable } from "../../Actions/tableActions";

function  InProgressSession(props) {
	
	const handleClick = event => {
		event.preventDefault();
		let table = {};
    	table.id= event.target.id;
		props.setCurrentTable(table);
	};

	//shows just the basic info for a session still in progress
    
	const tables = props.tables != undefined ? props.tables.map((tbl, index) => {
		return <div><TableName Id={tbl.id} capacity={tbl.capacity} size={tbl.size} buyin={tbl.buyin} tags={tbl.tables_tags} key={index}/><InfoButton id={tbl.id} onClick={handleClick}>View Hands</InfoButton>
		</div>;}) : null;
    
	return (
		<div className= "SessionName"> 
			<h3>Session in progress</h3>
			<h3>Minutes: {props.Minutes}</h3>
			<h3>Tables:</h3>
			<ul>
				{tables}
			</ul>
		</div>
	);
}

export default connect(null, { setCurrentTable })(InProgressSession);