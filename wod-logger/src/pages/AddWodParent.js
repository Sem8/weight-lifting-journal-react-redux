import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/AddWodParent.scss";

import AddExercises from "./AddExercises";
import {
  addWorkout,
  toggleAddWorkoutForm,
  toggleWorkoutModal
} from "../actions/wodParentActions";
// import WorkoutModal from "react-modal";

class AddWodParent extends Component {
  state = {
    workout: {
      region: ""
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

  addWorkout = e => {
    e.preventDefault();

    this.props.addWorkout(this.state.workout, this.props.userId);

    this.props.toggleAddWorkoutForm();

    this.setState({
      workout: {
        ...this.state.workout,
        region: ""
      }
    });
  };

  handleCloseModal = () => {
    this.props.toggleWorkoutModal();

    if (this.props.toggleAddExerciseValue) {
      this.props.toggleAddWorkoutForm();
    }
  };

  render() {
    return (
      <div>
        <div className='addWodParentDiv'>
          <h2> Type in your: </h2>
          <h4 className='instructionH4'>
            <strong>Body Region</strong>, <strong>Exercise Type</strong> (ex. Squats), <strong>Sets</strong> (ex. 3), 
            <strong> Reps</strong> (ex. 20), <strong> Weight Used</strong> if any (lbs/kg). 
          </h4>
          <form onSubmit={this.addWorkout}>
            <input
              type="text"
              value={this.state.workout.region}
              name="region"
              placeholder="Body region, exercise type, sets, reps, weight used"
              onChange={this.handleChanges}
              className='addWodInput'
            />

            <button onClick={this.addWorkout} className="addWorkoutBtn">
              Add Workout
            </button>
          </form>
        </div>
        <AddExercises />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggleModalWorkoutValue: state.wodParentReducer.toggleWorkoutModal,
  toggleAddExerciseValue: state.wodParentReducer.addExercise,
  userId: state.authReducer.currentUser
});

export default connect(
  mapStateToProps,
  { toggleWorkoutModal, toggleAddWorkoutForm, addWorkout }
)(AddWodParent);
