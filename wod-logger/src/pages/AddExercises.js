import React, { Component } from "react";
import { connect } from "react-redux";
import { addExercise } from "../actions";
// import CardioWgtList from "./CardioWgtList";

class AddExercises extends Component {
  state = {
    exercise: {
      "name": "",
      "reps": "",
      "sets": "",
      "weight": ""                           
    }
  };

  handleChanges = e => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAddExercise = e => {
		e.preventDefault();

		this.props.addExercise(
			this.state.exercise,
			this.props.workoutId,
			this.props.userId
		);

		this.setState({
			exercise: {
				...this.state.exercise,
				name: "",
				reps: "",
				sets: "",
				weight: ""
			}
		});
	};

  render() {
    return (
      <div>       

        <div>
          <h1>Cardio/Cardio with Weights</h1>
          <form onSubmit={this.handleAddExercise}>
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
              name="weight"
              placeholder="Weights used (lbs)"
              value={this.state.weight}
              onChange={this.handleChanges}
            />

            <button onClick={this.handleAddExercise}>Add exercise</button>
          </form>
        </div>
          {/* <section>
            <CardioWgtList />
          </section> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workoutId: state.wodParentReducer.workoutId,
  userId: state.authReducer.currentUser
})

export default connect(
  mapStateToProps,
  { addExercise }
)(AddExercises);
