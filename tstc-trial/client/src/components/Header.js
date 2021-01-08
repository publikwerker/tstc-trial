import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';

export default class Header extends React.Component {   
  state = {
    visitorObject: {},
    infoVis: false,
    count: 0
  }

  setVisitorObject = (value) => {
    this.setState({
      ...this.state,
      visitorObject: value
    })
  }

  setInfoVis = () => {
    console.log("setInfoVis was triggered");
    this.setState({
      ...this.state,
      infoVis: !this.state.infoVis
    })
  }

  setVis = (e) => {
    e.preventDefault();
    console.log("setVis was triggerd");
  }

  setCount = (value) => {
    this.setState({
      ...this.state,
      count: value
    })
  }

  componentDidMount(){
   //this.setCount(count);
  }

  render(){
    return (
      <header>
      <div className="ticker-box" onMouseEnter={this.setInfoVis} onMouseLeave={this.setInfoVis}>
        <Ticker setCount={this.props.setCount} setInfo={this.setVisitorObject} infoVis={this.state.infoVis}
        setVis={this.setInfoVis}/>
      </div>
        <Title />
      </header>
    )
  }
};