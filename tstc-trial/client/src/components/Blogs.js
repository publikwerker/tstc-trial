import React, {Component} from 'react';
const axios = require('axios');

export default class Blogs extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: []
    }
  }  

  componentDidMount(){
    axios.get('http://localhost:8080/blogs')
    .then((response) => {
      console.log(response);
      this.setState({blogs: response.data})
    }).catch((err)=>{
    console.log(err)
  });
}

blogBlocker(blogs){
  
  const block = blogs.map(blog => {
    return (
      <div className="oneBlog" key={blog._id}>
        <h2 className="oneBlog_title">{blog.title}</h2>
        <p className="oneBlog_body">{blog.content}</p>
      </div>
    );
  });
  return block;
}

  render(){

    const blogBlock = <div className="blogBlock">
      {this.blogBlocker(this.state.blogs)}
    </div>

    
    return (
      <div className="blogs">
        <h2>Space-Time Blogs</h2>
        <h3>Personal experiences with altered time and space.</h3>
        {blogBlock}
      </div>
    )
  }
}