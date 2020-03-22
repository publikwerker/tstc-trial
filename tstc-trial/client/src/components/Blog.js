import React, {Component} from 'react';

export default class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      expand: false,
      ...props.data
    }
  }
  
  handleClick(){
    console.log("clicked");
    this.setState((state) => {
      return {expand: !state.expand}});
  }
  
  render () {
    console.log('blog ran');
    console.log(this.state);
      if (this.state.expand===false) {
        return (<div className="oneBlog">
        <h2 className="oneBlog_title">{this.state.title}</h2>          <button onClick={this.handleClick.bind(this)}>More</button>
      </div>)
      } else {
        return (<div className="oneBlog">
          <h2 className="oneBlog_title">{this.state.title}</h2>
          <p className="oneBlog_body">{this.state.content}</p>
          <button onClick={this.handleClick}>Less</button>
        </div>)
      }
  }
}