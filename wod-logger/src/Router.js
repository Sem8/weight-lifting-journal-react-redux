import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/homepage';
import WorkoutPage from './pages/workoutpage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route exact path='/workout' component={WorkoutPage} />
        
    </Switch>
)

export default Router;