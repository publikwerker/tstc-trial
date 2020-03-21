import React, {Component} from 'react';

export default class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      expand: false,
      ...props.data
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({expand: !this.state.expand});
  }

  buttonMade = () => {
    if (this.state.expand===true) {
      return (<div className="hidden"></div>)
    } else {
      return (<button onClick={e=>this.handleClick(e)}>Less</button>);
    }
  }

  render () {
    console.log('blog ran');
    console.log(this.state);
    return (
      <div className="oneBlog">
        <h2 className="oneBlog_title" onClick={e=>this.handleClick(e)}>{this.state.title}</h2>
        <p className="oneBlog_body">{this.state.content}</p>
        {this.buttonMade()}
      </div>
    )
  }
}