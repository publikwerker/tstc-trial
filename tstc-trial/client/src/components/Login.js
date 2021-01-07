import React from 'react';

export default function Login(props) {
  console.log(props, "in Login");

  const sayTheWord = (e) => {
    e.preventDefault();
    console.log("click");
  }
  return(
    <div className="row">
      <button className="button" onClick={props.handleClick}>About</button>
      <button className="button" onClick={sayTheWord}>Login</button>
    </div>
  )
};