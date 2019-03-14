import React, { Component } from "react";
import { connect } from "react-redux";
import { addExercise } from "../actions";
import CardioWgtList from "./CardioWgtList";

class AddExercises extends Component {
  state = {
    workout: {
      "name": "",
      "reps": "",
      "sets": "",
      "weight": ""                           
    }
  };

  handleChanges = e => {
    this.setState({
      workout: {
        ...this.state.workout,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addExercise(this.state.workout);

  }

  render() {
    return (
      <div>
        {/* <div className="cardioFormDiv">
          <h1>Running/Biking</h1>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="workoutName"
              placeholder="Name your workout"
              value={this.state.workoutName}
              onChange={this.handleChanges}
            />
            <input
              name="workoutTime"
              placeholder="Workout duration"
              value={this.state.workoutTime}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="workoutDistance"
              placeholder="Distance"
              value={this.state.workoutDistance}
              onChange={this.handleChanges}
            />

            <button onClick={this.submitHandler}>Add exercise</button>
          </form>
        </div> */}

        {/* <div>
          <h1>Weight lifting only</h1>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="workoutName"
              placeholder="Name your workout"
              value={this.state.workoutName}
              onChange={this.handleChanges}
            />
            <input
              name="workoutTime"
              placeholder="Workout duration"
              value={this.state.workoutTime}
              onChange={this.handleChanges}
            />
            <input
              name="workoutSubType"
              placeholder="workoutSubType"
              value={this.state.workoutSubType}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="workoutSets"
              placeholder="Sets"
              value={this.state.workoutSets}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="workoutReps"
              placeholder="Reps"
              value={this.state.workoutReps}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="maxWeight"
              placeholder="Weights used (lbs)"
              value={this.state.maxWeight}
              onChange={this.handleChanges}
            />

            <button onClick={this.submitHandler}>Add exercise</button>
          </form>
        </div> */}

        <div>
          <h1>Cardio/Cardio with Weights</h1>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="name"
              placeholder="Exercise name ex. Squats"
              value={this.state.name}
              onChange={this.handleChanges}
            />            
            
            <input
              type="number"
              name="sets"
              placeholder="Sets"
              value={this.state.sets}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="reps"
              placeholder="Reps"
              value={this.state.reps}
              onChange={this.handleChanges}
            />
            <input
              type="number"
              name="weight"
              placeholder="Weights used (lbs)"
              value={this.state.weight}
              onChange={this.handleChanges}
            />

            <button onClick={this.submitHandler}>Add exercise</button>
          </form>
        </div>
          <section>
            <CardioWgtList />
          </section>
      </div>
    );
  }
}

export default connect(
  null,
  { addExercise }
)(AddExercises);
