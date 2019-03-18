import React, { Component } from 'react';
import { connect } from "react-redux";

import WodParent from './WodParent';
import { fetchWorkouts } from '../actions/wodParentActions';

class WodParentList extends Component {
    componentDidMount() {
        this.props.fetchWorkouts();
    }

  render() {
    return (
      <div>
          {this.props.workouts.map(workout => (
            workout.userId === 1 ? (
              <WodParent key={workout.id} {...workout} />
            ) : null
          ))}
        
      </div>
    );
  }
}


const mapStateToProps = ({ wodParentReducer }) => ({
    workouts: wodParentReducer.workouts
});

export default connect(
    mapStateToProps,
    { fetchWorkouts }    
)(WodParentList);


