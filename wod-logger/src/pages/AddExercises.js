import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class AddExercises extends Component {
    state = {
        workout: {
            workoutName: "",
            workoutDate: Date.now().toString(),
            workoutType: "",
            workoutSubType: "",
            workoutSets: "",
            workoutReps: "",
            maxWeight: "",
            currentWeight: "",
            workoutTime: "",
            workoutDistance: "",
            workoutNotes: ""
              }
    };

    handleChanges = e => {
        this.setState({
            workout: {
                ...this.state.workout,
                [e.target.name]: e.target.value                
            }
        })
    }

  render() {
    return (
      <div className='cardioFormDiv'>
          <h1>Running/Biking Logger</h1>
          <form>
            <input
            type='text'
            name='workoutName' 
            placeholder='Name your workout'
            value={this.state.workoutName}
            onChange={this.handleChanges}
            />
            <input            
            name='workoutTime' 
            placeholder='Workout duration'
            value={this.state.workoutTime}
            onChange={this.handleChanges}
            />
            <input
            type='number'
            name='workoutDistance' 
            placeholder='Distance'
            value={this.state.workoutDistance}
            onChange={this.handleChanges}
            />
            <textarea
            name='workoutNotes'
            value={this.state.workout.workoutNotes}
            placeholder='Comments'
            onChange={this.handleChanges}
             />
             <button>Add exercise</button>
          </form> 

          <div>
          <h1>Weight lifting only Logger</h1>
            <form>
              <input
              type='text'
              name='workoutName' 
              placeholder='Name your workout'
              value={this.state.workoutName}
              onChange={this.handleChanges}
              />
              <input            
              name='workoutTime' 
              placeholder='Workout duration'
              value={this.state.workoutTime}
              onChange={this.handleChanges}
              />
              <input
              type='number'
              name='workoutSets' 
              placeholder='Sets'
              value={this.state.workoutSets}
              onChange={this.handleChanges}
              />
              <input
              type='number'
              name='workoutReps' 
              placeholder='Reps'
              value={this.state.workoutReps}
              onChange={this.handleChanges}
              />
              <textarea
              name='workoutNotes'
              value={this.state.workout.workoutNotes}
              placeholder='Comments'
              onChange={this.handleChanges}
             />
             <button>Add exercise</button>
            </form> 

            <div>
              <h1>Cardio with weights logger</h1>
              <form>
              <input
              type='text'
              name='workoutName' 
              placeholder='Name your workout'
              value={this.state.workoutName}
              onChange={this.handleChanges}
              />
              <input            
              name='workoutTime' 
              placeholder='Workout duration'
              value={this.state.workoutTime}
              onChange={this.handleChanges}
              />
              <input
              type='number'
              name='workoutSets' 
              placeholder='Sets'
              value={this.state.workoutSets}
              onChange={this.handleChanges}
              />
              <input
              type='number'
              name='workoutReps' 
              placeholder='Reps'
              value={this.state.workoutReps}
              onChange={this.handleChanges}
              />
              <textarea
              name='workoutNotes'
              value={this.state.workout.workoutNotes}
              placeholder='Comments'
              onChange={this.handleChanges}
             />
             <button>Add exercise</button>
              </form>
              
            </div>

          </div>

          
             
      </div>
    )
  }
}

