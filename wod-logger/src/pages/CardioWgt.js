import React, { Component } from 'react';
import {connect} from 'react-redux';

class CardioWgt extends Component {
  render() {
    return (
      <div>
          <h2>{this.props.exercise.name}</h2>
        
      </div>
    )
  }
};

export default connect(
    null,
    {}
)(CardioWgt)
