import React, { Component } from "react";
import { connect } from "react-redux";
// import '../App.scss';

import AddExercises from "./AddExercises";
import {
  addWorkout,
  toggleAddWorkoutForm,
  toggleWorkoutModal
} from "../actions/wodParentActions";
import WorkoutModal from "react-modal";


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
        {/* <WorkoutModal
          isOpen={this.props.toggleModalWorkoutValue}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false} 
              
        >
          {!this.props.toggleAddExerciseValue ? (
            <div>
              <h2> Add Workout </h2>
              <form onSubmit={this.addWorkout}>
                <input
                  type="text"
                  value={this.state.workout.region}
                  name="region"
                  placeholder="Legs"
                  onChange={this.handleChanges}
                />
                <button onClick={this.addWorkout}>Add Workout</button>
              </form>
            </div>
          ) : ( 
            <AddExercises />
          )}
        </WorkoutModal> */}
        <div>
              <h2> Add Workout </h2>
              <form onSubmit={this.addWorkout}>
                <input
                  type="text"
                  value={this.state.workout.region}
                  name="region"
                  placeholder="Body region, exercise type, sets, reps, weight used"
                  onChange={this.handleChanges}
                />
                
                <button onClick={this.addWorkout}>Add Workout</button>
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
