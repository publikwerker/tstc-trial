import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';

export default class Compendium extends Component {
  
  render() {
    return (
      <div className="compendium">
          <p>TSTC is Online!</p>
          <Header />
      </div>
    );
  }
}