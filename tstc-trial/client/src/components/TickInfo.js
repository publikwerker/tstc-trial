import React from 'react';

export default class TickInfo extends React.Component {
  constructor(props){
    super(props);
  };

  render(){  
  console.log(props);
  return (
      <div className="modal">
        <h1>These are the facts</h1>
        <p>The facts.</p>
      </div>
    )
  }
};