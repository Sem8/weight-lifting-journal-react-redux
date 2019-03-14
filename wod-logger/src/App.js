import React, { Component } from 'react';
import './App.scss';

import Router from './Router';
import {NavLink} from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Home</NavLink> {' '}
        <NavLink to='/workout'>Workout Info.</NavLink> {' '}
        <NavLink to='/cardio'>Add Workout</NavLink>  {' '}
        
        <div>
          <Router />

        </div>
      

        
        
        
      </div>
    );
  }
}

export default App;
