import React, { Component } from 'react';
import './App.css';
import Workflows from '../components/Workflows/Workflows';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h2>FLOWAPP</h2>
        </header>
        {/* Route pages */}
        <Workflows />
      </div>
    );
  }
}

export default App;
