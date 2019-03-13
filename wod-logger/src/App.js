import React, { Component } from 'react';
import './App.scss';

import Router from './Router';
import {NavLink} from 'react-router-dom';





class App extends Component {
  
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/workout'>Workout Page</NavLink>
        

        <Router />
        
        
      </div>
    );
  }
}

export default App;
