import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Ticker from '.components/Ticker.js';

export default class Compendium extends Component {
  
  render() {
    return (
      <div className="compendium">
        <Switch>
          <p>TSTC is Online!</p>
          <Ticker />
        </Switch>
      </div>
    );
  }
}