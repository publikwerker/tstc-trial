import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';
import TickInfo from './TickInfo';

export default class Header extends React.Component {   
  constructor(props){
    super(props);
    this.state = {
      ...props,
      visitorDisplayString: '',
      visitorObject: {},
      infoVis: false,
      count: 0
    }
  }

  setVisitorDisplayString = (value) => {
    this.setState({
      ...this.state,
      visitorDisplayString:value
    });
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
    const infoButton = 
      <button onClick={this.props.setVis} className="button">+/-</button>

    let TickInfoElem = '';

    if(this.state.infoVis){

      TickInfoElem = <div>
        {infoButton}
        <TickInfo className="ticker" infoString={this.tickInfoString} />
        {infoButton}
      </div> 
    } else {
      TickInfoElem = infoButton;
    }
    return (
      <header>
      <div className="ticker-box" >
        {TickInfoElem}
        <Ticker setCount={this.props.setCount} setVDS={this.setVisitorDisplayString} setInfo={this.setVisitorObject} infoVis={this.state.infoVis}
        setVis={this.setInfoVis}/>
      </div>
        <Title />
      </header>
    )
  }
};