const mongoose = require('mongoose');

const Visitor = new mongoose.Schema({
  appName: {
    type:String,
  },
  appCodeName: {
    type:String
  },
  platform: {
    type:String
  },
  product: {
    type:String
  },
  appVersion: {
    type:String
  },
  userAgent: {
    type:String
  },
  language: {
    type:String
  },
  javaEnabled: {
    type:Boolean
  },
  hostname: {
    type:String
  },
  locale: {
    type:String
  },
  timeZone: {
    type:String
  },
  viewportHeight: {
        type: Number
  },
  viewportWidth: {
        type: Number
  }
});

module.exports = mongoose.model('Visitor', Visitor);