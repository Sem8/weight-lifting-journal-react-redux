import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/homepage';
import WorkoutPage from './pages/workoutpage';
import AddExercises from './pages/AddExercises';


const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route exact path='/workout' component={WorkoutPage} />
        <Route exact path='/cardio' component={AddExercises}/>
       
        
    </Switch>
)

export default Router;