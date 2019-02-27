import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { saveTableTags } from '../../Actions/tableActions'; 
import { saveSessionTags } from '../../Actions/sessionActions';

export class AddTagsForm extends Component {
  
    constructor(props) {
      super(props)
      this.props.tables_tags ? 
      this.state = { 
        tags: this.props.tables_tags.map(tag => tag.tag_name),
      } : 
      this.state = { 
        tags: this.props.sessions_tags.map(tag => tag.tag_name),
      }
    }
  
    handleOnChange = event => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
      });
    }
  
    handleOnSubmit = event => { 
      const tags = this.state.tags.split(",");
      event.preventDefault(); 
      if (this.props.table_id) {
        const table_id = this.props.table_id;
        this.props.saveTableTags(tags, table_id);  
        this.setState({
          tags: this.props.tables_tags.map(tag => tag.tag_name),
        });
      } 
      else { 
        const session_id = this.props.session_id;
        this.props.saveSessionTags(tags, session_id);
        this.setState({
          tags: this.props.sessions_tags.map(tag => tag.tag_name),
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
                            onChange={this.handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-6 col-md-offset-4">
                          <button type="submit" className="btn btn-default">Add</button>
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

    function mapStateToProps(state){ 
        return  state.TablesReducer.table ? {tables_tags: state.TablesReducer.table.tags, table_id: state.TablesReducer.table.id} :  {sessions_tags: state.SessionsReducer.session.tags, session_id: state.SessionsReducer.session.id};
    }
    
    export default connect(mapStateToProps, { saveTableTags, saveSessionTags })(AddTagsForm);