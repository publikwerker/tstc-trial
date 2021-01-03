import React, { useState, Component } from 'react';
import Marquee from 'react-double-marquee';
import TickInfo from './TickInfo';
const axios = require('axios');

export default class Ticker extends Component {

    state = {
      visitorObject: {},
    }
 

  componentWillMount(){
  
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    var today = new Date();

    this.setState({
      visitorObject : {
        hitDate : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
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
        //openPorts,navigatorPlugins,IPAddress
      }
    })

  }
  componentDidMount(){
    this.props.setInfo(this.state.visitorObject)
    this.postVisitors();
  }

  postVisitors(){
    axios({
      method:'post',
      url:'http://localhost:8080/visitor',
      data: this.state.visitorObject
    })
    .then(function (response) {
      console.log(response, "this is the axios response");
      this.setCount(response.data[0].count);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  visitorDisplayString = "";

  handleClick() {
    console.log("I was clicked");
    this.setState({ 
      infoVis: !this.state.infoVis 
    });
  }

  render(){
    var TickInfoElem;
    console.log(this.state);
    console.log(this.props)

    // allow access to key names as strings
    let visitorDisplayArray = JSON.stringify(this.state.visitorObject);

    //remove { and } from string
    visitorDisplayArray=visitorDisplayArray.slice(1,visitorDisplayArray.length-2);

    //remove commas from key values, so they don't split in next operation
    visitorDisplayArray = visitorDisplayArray.replace(/, /g, '; ');

    //create an array of arrays, each with key name and value
    visitorDisplayArray= visitorDisplayArray.split(',').map((pair) =>  pair.split(':'));
   
    //create string to display in Marquee
    this.visitorDisplayString = visitorDisplayArray.map( pair =>
    (pair[1]? ` Your ${pair[0]} variable has a value of ${pair[1]}.` : ` Your ${pair[0]} variable is blank.`));

    //create string to display in TickInfo
    this.tickInfoString = visitorDisplayArray.map( pair =>
    (pair[1]? ` Your ${pair[0]} variable has a value of ${pair[1]}.\n` : ` Your ${pair[0]} variable is blank.\n`));

    //pass string to TickInfo, conditionally    
    if(this.props.infoVis === true) {
      TickInfoElem = <TickInfo className="ticker" infoString={this.tickInfoString} />
    } else {
      TickInfoElem = <div />
    }

    return (
      <div className="ticker-box">
        <div className="ticker"
          style={{
            width: '100%',
            padding: '.5rem 0',
            fontSize: '1.3rem',
            whiteSpace: 'nowrap',
            direction: 'left',
          }}>
          <Marquee>Hey! Your browser exposes the following: {this.visitorDisplayString} -- thought you should know...</Marquee>
        </div>
        {TickInfoElem}
      </div>
    );
  }
}