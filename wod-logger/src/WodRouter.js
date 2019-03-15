import React, { Component } from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/homepage';
// import WorkoutPage from './pages/workoutpage';
// import AddExercises from './pages/AddExercises';



export class WodRouter extends Component {
  render() {
    return (
      <div>
          {/* <NavLink to='/'>Home</NavLink>  */}
          {/* <NavLink to='/workout'>Workout Info.</NavLink> 
          <NavLink to='/cardio'>Add Workout</NavLink>
          <Switch>
            <Route exact path='/' component={HomePage} />        
            <Route exact path='/workout' component={WorkoutPage} />
            <Route exact path='/cardio' component={AddExercises}/>
          </Switch>   */}
          <HomePage />      
      </div>
    )
  }
}

export default WodRouter



// const Router = () => (
    
// )

// export default Router;







