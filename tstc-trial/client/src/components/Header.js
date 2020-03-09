import React from 'react';

import Ticker from './Ticker.js';
import Title from './Title.js';

export default class Header extends React.Component {
  render(){
    return (
      <header>
        <Ticker />
        <Title />
      </header>
    )
  }
}