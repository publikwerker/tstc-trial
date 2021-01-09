import React, { useState, Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Login from './Login';

export default class Compendium extends Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0,
      showInfo : false
    }
  }

  setCount = (value) => {
    this.setState({
      ...this.state,
      count : value
    })
  }

  setVis = (e) => {
    e.preventDefault();
    console.log("setVis was triggerd");
    this.setState({
      ...this.state,
      showInfo : !this.state.showInfo
    })
  }
  
  render() {
    return (
      <div className="compendium">

          <Header 
            setCount={this.setCount}
            setVis={this.setVis}
            showInfo={this.state.showInfo}/>

          <Login />

          <Body />

          <Footer 
            count={this.state.count}/>

      </div>
    );
  }
}