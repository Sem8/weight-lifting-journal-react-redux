import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardioWgt from './CardioWgt';

import { fetchExercises } from '../actions/'; 

class CardioWgtList extends Component {
    componentDidMount() {

    }
  render() {
    return (
      <div className='cardioWgtListWrapper'>
      {this.props.exercises.map(exercise => (
          <CardioWgt key={exercise.workout_id} exercise={exercise} />
      ))}
      {console.log(this.props.exercises)}        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    exercises: state.exercises
});

// const mapStateToProps = ({ exerciseReducer }) => {
// 	return {
// 		exercises: exerciseReducer.exercises
// 	};
// };

export default connect (
    mapStateToProps, 
    {}
)(CardioWgtList);