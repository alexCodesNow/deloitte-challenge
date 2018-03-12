import React, { Component } from 'react';
import './App.css';
import { Button } from 'bootstrap';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">

          <div className="app-header-title">
          Discovering beer just got easier
          </div>
          <button type="button" className="app-header-button btn btn-primary">
            Learn More
          </button>

        </div>
        <div className="app-body"></div>
        <div className="app-footer"></div>
      </div>
    );
  }
}

export default App;
