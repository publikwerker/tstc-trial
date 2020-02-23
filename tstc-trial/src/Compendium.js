import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Compendium extends Component {
  
  render() {
    return (
      <div className="compendium">
        <Router>
          <p>TSTC is Online!</p>
        </Router>
      </div>
    );
  }
}