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

  const variables = this.props.infoString.map((text,index) => {
   return <li key={index}>{text}</li>
  })
  return (
      <div className="modal ticker">
        <h1>These are the facts</h1>
        <p>Your browser can expose semi-personal information to the World Wide Web. This includes your timezone, your location, what kind of processor your device has, what device you are using, etc.</p>
        <p>If you wish to hide this information or protect it, consider using your computer in privacy mode.</p>
        <p>This information is given as a public service.</p>
        <ul className="modal-ul">
          {variables}
        </ul>
      </div>
    )
  }
};