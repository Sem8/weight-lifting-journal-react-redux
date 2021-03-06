import React, { Component } from 'react';
import {connect} from 'react-redux';

import CardioWgt from './CardioWgt';

import { fetchExercises } from '../actions/index';  /* Delete later? */

class CardioWgtList extends Component {
    componentDidMount() {
        this.props.fetchExercises(this.props.workoutId);

    }
  render() {
    return (
      <div className='cardioWgtListWrapper'>
        {this.props.exercises.map((exercise, index) => (                
            <CardioWgt key={index} exercise={exercise} />         
        ))}
      {/* {console.log(this.props.exercises)}         */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.wodReducer.exercises  
});

export default connect (
  mapStateToProps, 
    {fetchExercises}
)(CardioWgtList);