/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

export default class CreateExercices extends Component {
  constructor(props) {
    super(props);

    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.descriptionOnchange = this.descriptionOnchange.bind(this);
    this.durationtionOnChange = this.durationtionOnChange.bind(this);
    this.dateOnChange = this.dateOnChange.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      user: ["test user"],
      username: "test user",
    });
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
    event.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(exercise);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <p className="">This Create exercises</p>
      </div>
    );
  }
}
