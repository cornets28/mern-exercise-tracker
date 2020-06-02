import React, { Component } from "react";

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    }
  }

   usernameOnChange(event) {
    this.setState({ username: event.target.value })
  }
 
    onSubmit() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    const user = {
      username: this.state.username,
    };
    this.setState({ username: "" });
    console.log(user);
  }
  render() {
    return (
      <div>
      <h3 className="">Create New User</h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.usernameOnChange}
            />
          </div>
          
         

          <div className="form-group">
            <input type="submit" value="Add New Exercise" className="btn btn-primary"/> 
          </div>
        </form>
      </div>
    );
  }
}
