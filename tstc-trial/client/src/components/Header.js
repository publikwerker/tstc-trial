import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';

export default class Header extends React.Component {   
  state = {
    visitorObject: {},
    infoVis: false
  }

  setVisitorObject = (value) => {
    this.setState({
      visitorObject: value
    })
  }

  setInfoVis = () => {
    this.setState({
      infoVis: !this.state.infoVis
    })
  }

  componentDidMount(){
   // this.setCount(count);
  }

  render(){
    return (
      <header>
      <div className="ticker-box" onClick={this.setInfoVis} >
        <Ticker setInfo={this.setVisitorObject} infoVis={this.state.infoVis}/>
        <button type="input" onClick={this.setInfoVis}>+/-</button>
      </div>
        <Title />
      </header>
    )
  }
};