const mongoose = require('mongoose');

const Visitor = new mongoose.Schema({
  duration: {
    type:Number,
  },
  IPAddress: {
    type:String,
  },
  navAppName: {
    type:String,
  },
  navAppCodeName: {
    type:String
  },
  navPlatform: {
    type:String
  },
  navProduct: {
    type:String
  },
  navAppVersion: {
    type:String
  },
  navUserAgent: {
    type:String
  },
  navLanguage: {
    type:String
  },
  navJavaEnabled: {
    type:Boolean
  },
  hostname: {
    type:String
  },
  visitorLocation: {
    type:String
  },
  visitorTimeZone: {
    type:String
  },
  viewportSize: {
    type:Object,
    properties: {
      height: {
        type: Number
      },
      width: {
        type: Number
      }
    }
  },
  openPorts: {
    type:Number,
    default:0,
  },
  navigatorPlugins: {
    type:Array,
  },
});

module.exports = mongoose.model('Visitor', Visitor);