import React, { Component } from 'react';
import './App.scss';
import WodRouter from './WodRouter';

import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';

import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={WodRouter} />        
          
            {/* <WodRouter /> */}

        </div>
      </Router>      
    );
  }
}

export default App;
