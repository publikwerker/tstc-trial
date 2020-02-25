import React, { Component } from 'react';

export default class Ticker extends Component {

  setVariableName(variable){
    if (variable != false) {

    }
  }
  
  render(){

    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    let navAppName = navigator.appName;
    let navAppCodeName = navigator.appCodeName;
    let navPlatform = navigator.platform;
    let navProduct = navigator.product;
    let navAppVersion = navigator.appVersion;
    let navUserAgent = navigator.userAgent;
    let navLanguage = navigator.language;
    let navOnLine = navigator.onLine;
    let navJavaEnabled = navigator.javaEnabled();
    let hostname = window.location.hostname;
    let visitorLocation = Intl.DateTimeFormat().resolvedOptions().locale;
    let visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let viewportSize = {height: h, width: w};


    return (
      <div className="banner-box">
      <p>Notice: This is the information you are exposing:</p>
      <div className="banner">navigator.appName is  "{navAppName}". navigator.appCodeName is "{navAppCodeName}". navigator.platform is "{navPlatform}". navigator.product is "{navProduct}". navigator.appVersion is "{navAppVersion}". navigator.userAgent is "{navUserAgent}". navigator.language is "{navLanguage}". navigator.onLine is "{navOnLine}". navigator.javaEnabled() is "{navJavaEnabled}". Browser inner window width: {w}, height: {h}. Your page hostname is "{hostname}". Your location is "{visitorLocation}". Your timezone is {visitorTimeZone}.</div>
      </div>
    );
  }
}