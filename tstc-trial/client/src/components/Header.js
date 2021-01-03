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
    this.setState({
      ...this.state,
      infoVis: !this.state.infoVis
    })
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
      <div className="ticker-box" onClick={this.setInfoVis} >
        <Ticker setCount={this.setCount} setInfo={this.setVisitorObject} infoVis={this.state.infoVis}/>
        <button type="input" onClick={()=>this.setInfoVis}>+/-</button>
      </div>
        <Title />
      </header>
    )
  }
};