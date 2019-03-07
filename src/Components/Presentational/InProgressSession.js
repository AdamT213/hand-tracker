import React  from "react"; 
import { connect } from 'react-redux';
import { InfoButton } from "./styles";
import TableName from "./TableName";
import { setCurrentTable } from "../../Actions/tableActions";
import styles from "styled-components";

const DivContainer = styles.div` 
  display: inline-block;
`;

export const Div = styles.div` 
	background: #000000;
	color: #0d7c57;
	display: inline-block;
	width: 94%
	padding: 1%;
	margin-top: 5%;
	margin-bottom: 1%;
	border-style: inset;
`;

const Divv = styles.div` 
	  margin-bottom: 2%;
`;



function  InProgressSession(props) {
	
	const handleClick = event => {
		event.preventDefault();
		let table = {};
    	table.id= event.target.id;
		props.setCurrentTable(table);
	};

	//shows just the basic info for a session still in progress
    
	const tables = props.tables != undefined ? props.tables.map((tbl, index) => {
		return <Divv><TableName Id={tbl.id} capacity={tbl.capacity} size={tbl.size} buyin={tbl.buyin} tags={tbl.tables_tags} key={index}/><InfoButton id={tbl.id} onClick={handleClick}>View Hands</InfoButton>
		</Divv>;}) : null;
    
	return (
		<Div>
			<h3>Session in progress</h3>
			<h3>Minutes: {props.Minutes}</h3>
			<h3>Tables:</h3>
			<DivContainer>
				{tables}
			</DivContainer>
		</Div>
	);
}

export default connect(null, { setCurrentTable })(InProgressSession);