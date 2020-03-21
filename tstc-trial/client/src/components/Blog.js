import React, {Component} from 'react';

export default class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      expand: false,
      ...props.data
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState((state) => ({expand: !this.state.expand}));
  }

  render () {
    console.log('blog ran');
    console.log(this.state);
      if (this.state.expand===false) {
        return (<div className="oneBlog" onClick={e=>this.handleClick(e)}>
        <h2 className="oneBlog_title">{this.state.title}</h2>
      </div>)
      } else {
        return (<div className="oneBlog" onClick={e=>this.handleClick(e)}>
          <h2 className="oneBlog_title">{this.state.title}</h2>
          <p className="oneBlog_body">{this.state.content}</p>
          <button onClick={e=>this.handleClick(e)}>Less</button>
        </div>)
      }
  }
}