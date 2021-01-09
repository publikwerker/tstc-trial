import React from 'react';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ...props, 
      expanded : false };
  }

  sayTheWord = (e) => {
    e.preventDefault();
    console.log("click");
    this.setState({
      ...this.state, 
      expanded: !this.state.expanded
    });
  };
  
  render(){
    let loginForm = '';
    let buttonText = '';
    if(this.state.expanded){
      buttonText = "Nevermind";
      loginForm = <form className="login-form ticker">
        <label for="username">Username</label>
        <input 
          className="input-field"
          type="text" 
          name="username" 
          placeholder="Traveller001"
          ></input>

        <label for="password">Password</label>
        <input 
          className="input-field"
          type="text" 
          name="password" 
          placeholder="Sw0rdf1$h"
          ></input>

        <button type="submit">Login</button>
      </form>
    } else {
      loginForm = '';
      buttonText = "Login";
    }

    return(
      <div className="login">
        <div className="row">
          <button className="button" 
            onClick={this.sayTheWord}
            >{buttonText}</button>
        </div>
        {loginForm}
      </div>
    )
  }
};