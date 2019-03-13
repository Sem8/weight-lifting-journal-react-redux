import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/homepage';
import WorkoutPage from './pages/workoutpage';
import AddCardio from './pages/AddExercises';
import AddWeights from './pages/AddWeights';
import AddCardioWeights from './pages/AddCardioWeights';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route exact path='/workout' component={WorkoutPage} />
        <Route exact path='/cardio' component={AddCardio}/>
        <Route exact path='/weights' component={AddWeights} />
        <Route exact path='/cardioweights' component={AddCardioWeights} />
        
    </Switch>
)

export default Router;