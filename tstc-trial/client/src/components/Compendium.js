import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Compendium extends Component {
  
  render() {
    return (
      <Router>
        <div className="compendium">
            <Header />
            <Body />
            <Footer />
        </div>
      </Router>
    );
  }
}