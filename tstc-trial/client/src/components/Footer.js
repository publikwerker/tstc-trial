import React from 'react';
import Ticker from './Ticker.js';

export default class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
      visitorObject : {}
    }
  }

  
  //This is displayed in info box
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

  render() {
    const infoButton = 
      <button 
        onClick={this.props.setVis} 
        className="button info-button"
      >+/-</button>

    let TickInfoElem = '';

    if(this.props.showInfo){

      TickInfoElem = <div className="tickInfo-box">
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
      <footer>    
      <div className="ticker-box" >
        {TickInfoElem} 
        <Ticker 
          infoVis={this.state.infoVis}
          setCount={this.props.setCount} 
          setVDS={this.setVisitorDisplayString} 
          setVO={this.setVisitorObject} 
          setVis={this.setInfoVis}/>
        </div>
        <div className="row">
          <div className="ticker count">{count} people have visited this site.</div>
        </div>
      <p className="footer-text">All content Copyright &copy; 2021 Publikwerks, LLC</p>
      </footer>
    )
  }
}