import React from 'react';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, expanded: false };
  }

  sayTheWord = (e) => {
    e.preventDefault();
    console.log("click");
    this.setState({...this.state, expanded: !this.state.expanded});
  };
  
  render(){
    let loginForm = '';
    if(this.state.expanded){
      loginForm = <form className="login-form ticker">
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="username"></input>

        <label for="password">Password</label>
        <input type="text" name="password" placeholder="password"></input>

        <button type="submit">Login</button>
      </form>
    } else {
      loginForm = '';
    }

    return(
      <div>
        <div className="row">
          <button className="button" onClick={this.sayTheWord}>Login</button>
        </div>
        {loginForm}
      </div>
    )
  }
};