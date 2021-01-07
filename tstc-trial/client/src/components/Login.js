import React from 'react';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function Login(props) {
  console.log(props, "in Login");

  const sayTheWord = (e) => {
    e.preventDefault();
    console.log("click");
  }
  return(
    //<Router>
      <div className="row">
        <button className="button" onClick={props.handleClick}>About</button>
        <button className="button" onClick={sayTheWord}>Login</button>
      </div>
    //</Router>
  )
};