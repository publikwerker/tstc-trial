import React from 'react';

export default class TickInfo extends React.Component {
  constructor(props){
    super(props);
    this.setState ={
      state: this.props
    }
  };

  render(){  
  console.log(this.props);
  return (
      <div className="modal ticker">
        <h1>These are the facts</h1>
        <p>The facts.</p>
      </div>
    )
  }
};