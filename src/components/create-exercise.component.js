/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercices extends Component {
  constructor(props) {
    super(props);

    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.descriptionOnchange = this.descriptionOnchange.bind(this);
    this.durationtionOnChange = this.durationtionOnChange.bind(this);
    this.dateOnChange = this.dateOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      }));
  }

  usernameOnChange(event) {
    this.setState({ username: event.target.value })
  }

   descriptionOnchange(event) {
    this.setState({ description: event.target.value })
  }

   durationtionOnChange(event) {
    this.setState({ duration: event.target.value })
  }

  dateOnChange(date) {
    this.setState({ date })
  }

  onSubmit() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    
     console.log(exercise);
     axios
       .post("http://localhost:5000/exercise/add", exercise)
       .then((res) => console.log(res.data));
    window.location = "/";
   
  }

  render() {
    return (
      <div>
        <h3 className="">Create New Exercise For Tracking</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.usernameOnChange}
            >
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.descriptionOnchange}
            />
          </div>
          <div className="form-group">
            <label>Duration:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.durationtionOnChange}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.dateOnChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Add New Exercise" className="btn btn-primary"/> 
          </div>
        </form>
      </div>
    );
  }
}
