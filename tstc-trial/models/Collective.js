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
  }
});

module.exports = mongoose.model('Collective', Collective);