import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import WorkflowsContainer from './WorkflowsContainer/WorkflowsContainer';
import CreateWorkflow from './CreateWorkflow/CreateWorkflow';

class App extends Component {
  
  render () {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2><Link to="/">FLOWAPP</Link></h2>
          </header>
          {/* Route pages */}
          <Switch>
            <Route path="/" exact>
              <WorkflowsContainer />
            </Route>
            <Route path="/edit">
              <CreateWorkflow />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
