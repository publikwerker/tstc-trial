const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
  firstname: {
    type:String,
    trim:true,
    default:''
  },
  lastname: {
    type:String,
    trim: true,
    default:''
  },
  username: {
    type:String,
    trim: true,
    default:''
  },
  email: {
    type:String,
    trim: true,
    default:''
  },
  password: {
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

module.exports = mongoose.model('Profile', Profile);