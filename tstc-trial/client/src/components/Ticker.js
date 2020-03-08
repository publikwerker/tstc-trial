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
     appName : navigator.appName,
     appCodeName : navigator.appCodeName,
     platform : navigator.platform,
     product : navigator.product,
     appVersion : navigator.appVersion,
     userAgent : navigator.userAgent,
     language : navigator.language,
     onLine : navigator.onLine,
     javaEnabled : navigator.javaEnabled(),
     hostname : window.location.hostname,
     locale : Intl.DateTimeFormat().resolvedOptions().locale,
     timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
     viewportHeight : h,
     viewportWidth : w
    };

    let visitorDisplayArray = JSON.stringify(this.visitorObject).split(',').map((pair) =>  pair.split(':'));
    console.log(visitorDisplayArray);
   
    this.visitorDisplayString = visitorDisplayArray.map( pair =>
    (pair[1]? ` Your ${pair[0]} variable has a value of ${pair[1]}.` : ` Your ${pair[0]} variable is blank.`));

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