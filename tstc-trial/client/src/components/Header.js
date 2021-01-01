import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';

export default class Header extends React.Component {   
  constructor(props){
    super(props);
    this.state={
      infoVis: false
    }
  }

  componentDidMount(){
   // this.setCount(count);
  }
  
  handleClick = () => {
  console.log("I was clicked");
  this.setState({ 
    infoVis: !this.state.infoVis
  });
}
  render(){
    return (
      <header>
      <div onClick={this.handleClick} className="ticker-box">
        <Ticker infoVis={this.state.infoVis}/>
      </div>
        <Title />
      </header>
    )
  }
};