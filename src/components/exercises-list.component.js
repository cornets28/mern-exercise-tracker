import React, { Component } from 'react'
import { Link } from "react-datepicker";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td><Link to={"/edit/"+props.exercise._id}> Edit </Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}> Delete </a></td>
  </tr>
);


export  default class ExercicesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []}
  }

  componentDidMount() {
    axios.get("http://localhost:5000/exercises")
      .then(response => {
        this.setState({ exercises: response.data})
      })
      .catch(err => {
        console.log(err)
      }) 
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" +id)
      .then(response => console.log(response.data));
      this.setState({
        exercises: this.state.exercises.filter(exer => exer._id !== id)
      })
  }

  exercicesList() {
    return this.state.exercises.map(singleExercise => {
      <Exercise exercise={singleExercise} deleteExercise={this.deleteExercise} key={singleExercise._id} />;
    })
  }
  render() {
    return (
      <div>
        <h3 className="">The Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.exercicesList() } 
          </tbody>
        </table>
      </div>
    );
  }  
}
