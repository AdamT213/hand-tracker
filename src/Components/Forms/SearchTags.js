import React, { useState } from "react";
import { InfoButton } from "../Presentational/styles";
import styled from "styled-components";

const Input = styled.input `
    width: 35%;
	text-align: center;
	font-style: italic;
 `;

export function SearchTags() {

	const [state, setState] = useState({ tags: "Search for hands, sessions, and tables by tag"});
  
	const handleOnChange = event => {
		const { value, name } = event.target;
		setState({
			[name]: value,
		});
	};

	const handleOnSubmit = event => {
		event.preventDefault(); 
		setState({
			tags: "functionality coming soon! (this component powered by React hooks!)",
		});
	};
  
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<div className="panel panel-default">
						<div className="panel-body">
							<form className="form-horizontal" onSubmit={handleOnSubmit}>
								<div className="form-group">
									<label htmlFor="tag" className="col-md-4 control-label">Search By Tags</label>
									<div className="col-md-5"><br />
										<Input
											className="form-control"
											name="tags"
											value={state.tags}
											onChange={handleOnChange} />
									</div><br />
								</div>
								<div className="form-group">
									<div className="col-md-6 col-md-offset-4">
										<InfoButton type="submit" className="btn btn-default">Search</InfoButton>
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

