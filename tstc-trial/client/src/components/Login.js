import React from 'react';

export default function Login(props) {
  console.log(props, "in Login");
  return(
    <div className="row">
      <button onClick={props.handleClick("About")}>About</button>
      <button onClick={props.handleClick("Login")}>Login</button>
    </div>
  )
};