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
  }, 
  created_at: { 
    type: Date, 
    required: true, 
    default: Date.now 
  }, 
  updated_at: { 
    type: Date, 
    required: true, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Blog', Blog);