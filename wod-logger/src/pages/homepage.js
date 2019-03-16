import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { Route, NavLink, Switch} from 'react-router-dom';


// import WorkoutPage from './workoutpage';
// import AddExercises from './AddExercises';
import AddWodParent from './AddWodParent';
import WodParentList from './WodParentList'

export default class HomePage extends Component {
  render() {
    return (      
      <div className='homeDiv'>      
        <h2>Homepage</h2> 
        {/* <NavLink to='/workout'>Workout Info.</NavLink> 
        <NavLink to='/cardio'>Add Workout</NavLink>        
        
          <Route path='/workout' component={WorkoutPage} />
          <Route path='/cardio' component={AddExercises}/> */}
          {/* <WorkoutPage /> */}          
           {/* <AddExercises /> */}

           <AddWodParent />
           <WodParentList />    
        
      </div>
    )
  }
}
