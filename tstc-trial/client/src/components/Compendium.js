import React, { useState, Component } from 'react';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Login from './Login';

export default class Compendium extends Component {
  state = {
      count: 0
    }

  handleClick = (e) => {
    e.preventDefault();
    console.log("word");
  }

  setCount = (value) => {
    this.setState({
      count: value
    })
  }
  
  render() {
    return (
    //  <Router>
        <div className="compendium">
            <Header setCount={this.setCount}/>
            <Login handleClick={this.handleClick} />
            <Body />
            <Footer count={this.state.count}/>
        </div>
    //  </Router>
    );
  }
}