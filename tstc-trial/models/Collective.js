const mongoose = require('mongoose');

const Collective = new mongoose.Schema({
  title: {
    type:String,
    trim:true,
    required: true
  },
  content: {
    type:String,
    trim:true,
    required:true,
  },
  author: {
    type:String,
    trim:true,
    required:true
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

module.exports = mongoose.model('Collective', Collective);