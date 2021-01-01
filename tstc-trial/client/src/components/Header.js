import React from 'react';
import Ticker from './Ticker.js';
import Title from './Title.js';

export default class Header extends React.Component {    
  handleClick = () => {
  console.log("I was clicked");
  this.setState({ 
    infoVis: true 
  });
}
  render(){
    return (
      <header>
        <Ticker onClick={()=>{this.handleClick()}}/>
        <Title />
      </header>
    )
  }
};