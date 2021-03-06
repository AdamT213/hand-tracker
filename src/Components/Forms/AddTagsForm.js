import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { saveTableTags } from '../../Actions/tableActions'; 
import { saveSessionTags } from '../../Actions/sessionActions';
import { InfoButton } from "../Presentational/styles";


export class AddTagsForm extends Component {
  
    constructor(props) {
      super(props)
      let initialState;
      if (this.props.table && this.props.table.tags){
        initialState = {tags: this.props.table.tags.map(tag => tag.tag_name, ),}
      }
      else if (this.props.session && this.props.session.tags){
        initialState = {tags: this.props.session.tags.map(tag => tag.tag_name, ),}
      } else { 
        initialState = {tags: "No tags yet",}
      }
      this.state = {
        initial: initialState.tags,
        tags: initialState.tags,
      }
    }

    handleOnFocus = event => { 
      const { name } = event.target;
      this.setState({
        [name]: "",
      });
    }
  
    handleOnChange = event => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    }
  
    handleOnSubmit = event => { 
      event.preventDefault(); 
      console.log(this.state.tags);
      const tags = this.state.tags.split(",");
      if (this.props.table) {
        const table_id = this.props.table.id;
        this.props.saveTableTags(tags, table_id);  
        this.setState({
          tags: this.props.table.tags.map(tag => tag.tag_name),
        });
      } 
      else { 
        const session_id = this.props.session.id;
        this.props.saveSessionTags(tags, session_id);
        this.setState({
          tags: this.props.session.tags.map(tag => tag.tag_name),
        });
      }
    }
  
    render() { 
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                      <div className="form-group">
                        <label htmlFor="tag" className="col-md-4 control-label">Tags</label>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            name="tags"
                            value={this.state.tags}
                            onFocus={this.handleOnFocus}
                            onChange={this.handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-6 col-md-offset-4">
                          <InfoButton type="submit" className="btn btn-default">Add</InfoButton>
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
    }
    
    export default connect(null, { saveTableTags, saveSessionTags })(AddTagsForm);