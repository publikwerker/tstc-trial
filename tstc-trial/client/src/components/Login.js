import React from 'react';


export default function Login(props) {
  console.log(props, "in Login");

  const loginForm = <div></div>;
  const sayTheWord = (e) => {
    e.preventDefault();
    console.log("click");
    loginForm = <form className="login-form">
      <label for="username">Username</label>
      <input type="text" name="username" placeholder="username"></input>

      <label for="password">Password</label>
      <input type="text" name="password" placeholder="password"></input>
      
      <button type="submit">Login</button>
    </form>
  }
  return(
      <div className="row">
        <button className="button" onClick={props.handleClick}>About</button>
        <button className="button" onClick={sayTheWord}>Login</button>
        {loginForm}
      </div>
  )
};