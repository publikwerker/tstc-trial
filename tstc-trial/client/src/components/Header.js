import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';
import TickInfo from './TickInfo';

export default class Header extends React.Component {   
  constructor(props){
    super(props);
    this.state = {
      ...props,
      visitorObject : {},
      count : 0
    }
  }

  visitorDisplayString = '';

  setVisitorDisplayString = (value) => {
      this.visitorDisplayString = value;
  }

  setVisitorObject = (value) => {
    this.setState({
      ...this.state,
      visitorObject: value
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
    const infoButton = 
      <button 
        onClick={this.props.setVis} 
        className="button">+/-</button>

    let TickInfoElem = '';

    if(this.props.showInfo){

      TickInfoElem = <div>
        {infoButton}
        <TickInfo 
          className="ticker" 
          infoString={this.visitorDisplayString} />
        {infoButton}
      </div> 
    } else {
      TickInfoElem = infoButton;
    }
    return (
      <header>
      <div className="ticker-box" >
        {TickInfoElem}
        <Ticker 
          infoVis={this.state.infoVis}
          setCount={this.props.setCount} 
          setVDS={this.setVisitorDisplayString} 
          setVO={this.setVisitorObject} 
          setVis={this.setInfoVis}/>
      </div>
        <Title />
      </header>
    )
  }
};