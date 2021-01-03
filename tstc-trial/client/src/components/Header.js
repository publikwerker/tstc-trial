import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';

export default class Header extends React.Component {   
  state = {
    visitorObject: {},
    infoVis: false
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
        <Ticker infoVis={this.state.infoVis}/>
      </div>
        <Title />
      </header>
    )
  }
};