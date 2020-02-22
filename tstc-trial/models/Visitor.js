const mongoose = require('mongoose');

const Visitor = new mongoose.Schema({
  hitDate: {
    type: Date,
  },
  duration: {
    type: Number,
  },
  OS: {
    type: String,
  },
  location: {
    type: String,
  },
  IPAddress: {
    type: String,
  },
  windowName: {
    type:String,
  },
  navigatorPlugins: {
    type:Array,
  },
  viewportSize: {
    type:Array,
  },
  openPorts: {
    type:Number,
    default:0,
  },
  preferedLanguage: {
    type:String,
    default:'',
  },
  localTime: {
    type:String,
  },
  localTimeZone: {
    type:String,
  },
  browserVersion: {
    type:String,
  },
  appName: {
    type:String,
  },
  platform: {
    type:String,
  },
  product: {
    type:String,
  },
  userAgent: {
    type:String,
  }
});

module.exports = mongoose.models('Visitor', Visitor);