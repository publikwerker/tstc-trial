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

  render(){

    
    return (
      <div className="blogs">
        <h2>Space-Time Blogs</h2>
        <h3>Personal experiences with altered time and space.</h3>
      </div>
    )
  }
}