import React, { Component } from 'react';
import {connect} from 'react-redux';

import { deleteWorkout, updateWorkout } from '../actions/wodParentActions';
// import { fetchExercises } from '../actions/index'; 
import CardioWgtList from './CardioWgtList';

class WodParent extends Component {
    state = {
        workoutToggle: false,
        isEditing: false,
        workout: {
            region: this.props.region
        }
    };

    toggleWorkout = () => {
        this.setState({
            workoutToggle: !this.state.workoutToggle
        });
    };

    updateWorkout = e => {
        this.props.updateWorkout(this.state.workout, this.props.id);

        this.setState({
            isEditing: !this.state.isEditing
        });
    };

    deleteWorkout = e => {
        e.preventDefault();
        this.props.deleteWorkout(this.props.id);
    }

    handleChanges = e => {
        this.setState({
            workout: {
                ...this.state.workout,
                [e.target.name]: e.target.value
            }
        });
    };

    handleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    };

  render() {
    return (
      <div>
          {!this.state.isEditing ? (
              <div>
              <h1 onClick={this.toggleWorkout}>{this.state.workout.region}</h1>
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.deleteWorkout}>Delete</button>
            </div> 
          ) : (
              <div>
                  <input
                    type='text'
                    name='region'
                    value={this.state.workout.region}
                    onChange={this.handleChanges}
                   />
                   <button onClick={this.updateWorkout}>Update</button>
                   <button onClick={this.handleEdit}>Cancel</button>
              </div>
          )}

        <div>
            {this.state.workoutToggle && (
                <CardioWgtList workoutId={this.props.id}  />  
             )}
        </div>                 
      </div>
    )
  }
};

export default connect(
    null,
    { deleteWorkout, updateWorkout }
)(WodParent)


