import React, { Component } from "react";
import { connect } from "react-redux";

class FormExerciseList extends Component {
	render() {
		return (
			<div>
				{this.props.exercises.map(exercise =>
					exercise.journalId === this.props.journalId ? (
						<div key={exercise.journalId}>
							<p>{exercise.name}</p>
											
						</div>					
					) : null
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
    exercises: state.wodReducer.exercises,
    journalId: state.wodParentReducer.workoutId
});

export default connect(
    mapStateToProps,
    {}
)(FormExerciseList);