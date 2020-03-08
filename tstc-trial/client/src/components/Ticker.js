import React, { Component } from 'react';
import Marquee from 'react-double-marquee';

export default class Ticker extends Component {
  visitorDisplayString = "";
  visitorObject = {};

  render(){

    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    this.visitorObject = {
     navAppName : navigator.appName,
     navAppCodeName : navigator.appCodeName,
     navPlatform : navigator.platform,
     navProduct : navigator.product,
     navAppVersion : navigator.appVersion,
     navUserAgent : navigator.userAgent,
     navLanguage : navigator.language,
     navOnLine : navigator.onLine,
     navJavaEnabled : navigator.javaEnabled(),
     hostname : window.location.hostname,
     visitorLocation : Intl.DateTimeFormat().resolvedOptions().locale,
     visitorTimeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
     viewportHeight : h,
     viewportWidth : w
    }
    console.log(w);
    console.log(this.visitorObject.viewportWidth);

    let visitorDisplayArray = JSON.stringify(this.visitorObject).split(',').map((pair) => pair.split(':'));
    this.visitorDisplayString = visitorDisplayArray.map( pair =>
    (pair[1]? ` Your ${pair[0]} variable has a value of ${pair[1]}.` : ` Your ${pair[0]} variable is blank.`));
    console.log(visitorDisplayArray);

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
            <Marquee>Notice: Your browser is exposing the following information: {this.visitorDisplayString}</Marquee>
          </div>
        </div>
      </div>
    );
  }
}