const mongoose = require('mongoose');

const Blog = new mongoose.Schema({
  title: {
    type:String,
    trim:true,
    default:''
  },
  content: {
    type:String,
    trim: true,
    default:''
  }
});

module.exports = mongoose.model('Blog', Blog);