import React, { Component } from 'react';
import Marquee from 'react-double-marquee';

export default class Ticker extends Component {

  visitorObject = {};

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

    this.visitorObject ={
      navAppName,
      navAppCodeName,
      navPlatform,
      navProduct,
      navAppVersion,
      navUserAgent,
      navLanguage,
      navOnLine,
      navJavaEnabled,
      hostname,
      visitorLocation,
      visitorTimeZone,
      viewportSize
    }

    return (
      <div className="banner-box">
        <div className="ticker-box">
          <div id="ticker"       
            style={{
              width: '100%',
              padding: '5px',
              fontSize: '1.3rem',
              whiteSpace: 'nowrap',
              direction: 'left',
            }}>
            <Marquee>Notice: Your browser is exposing the following information: The navigator.appName is  "{navAppName}". The navigator.appCodeName is "{navAppCodeName}". The navigator.platform is "{navPlatform}". The navigator.product is "{navProduct}". The navigator.appVersion is "{navAppVersion}". The navigator.userAgent is "{navUserAgent}". The navigator.language is "{navLanguage}". The navigator.onLine is "{navOnLine}". The navigator.The javaEnabled() is "{navJavaEnabled}". The browser inner window width: {w}, height: {h}. Your page hostname is "{hostname}". Your location is "{visitorLocation}".</Marquee>
          </div>
        </div>
      </div>
    );
  }
}