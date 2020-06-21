import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthButton } from '../services/Auth/FakeAuth';
import PrivateRoute from '../services/Auth/PrivateRoute';
import LoginPage from './LoginPage';
import WorkflowsContainer from './WorkflowsContainer';
import CreateWorkflow from './CreateWorkflow';

class App extends Component {

  render () {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="block">
              <h2><Link to="/">FLOWAPP</Link></h2>
            </div>
            <div className="block">
              <AuthButton />
            </div>
          </header>

          {/* Route pages */}
          <Switch>
            <Route path="/login" component={LoginPage} />

            <PrivateRoute path="/flowapp" >
              <WorkflowsContainer />
            </PrivateRoute>

            <PrivateRoute path="/"  exact >
              <WorkflowsContainer />
            </PrivateRoute>

            <PrivateRoute path="/edit/:id?" >
              <CreateWorkflow />
            </PrivateRoute>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
