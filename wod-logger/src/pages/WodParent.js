import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../styles/wodParent.scss';

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
      <div className='wodParentListItem'>
          {!this.state.isEditing ? (
              <div className='eachWodDiv'>
              <h2 onClick={this.toggleWorkout}>{this.state.workout.region}</h2>
              <span onClick={this.deleteWorkout} className='deleteIcon'><i className='fas fa-window-close' /></span>             
             <span onClick={this.handleEdit} className='editBtn'><i className="far fa-edit"></i></span> 
             
              
            </div> 
          ) : (
              <div>
                  <input
                    type='text'
                    name='region'
                    value={this.state.workout.region}
                    onChange={this.handleChanges}
                    className='editWodInput'
                   />                   
                   <span onClick={this.updateWorkout} className='updateOkIcon'><i className="fas fa-check"></i></span>
                   <button onClick={this.handleEdit} className='cancleUpdateBtn'>Cancel</button>
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


