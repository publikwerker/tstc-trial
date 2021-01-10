var express = require("express");
var app = express();

var visitor = require("../models-mysql/visitor");

//MYSQL 
app.get('/visitor', (req,res) => {
  console.log(req.body, "**************************This is the req.body variable from /visitor GET");
  visitor.all(function(data) {
    var visObject = {
      visitors: data
    };
    console.log(visObject);
    res.send(visObject);
  });
});


app.get('/visitorCount', (req,res) => {  
  console.log(req.body, "**************************This is the req.body variable from /visitorCount GET");
  visitor.all(function(data) {
    var count = data.length;
    console.log(count);
    res.send(count);
  });
});

app.post('/visitor', (req,res) => {
  const { 
    hitDate, 
    hitTime,
    appName, 
    appCodeName, 
    platform, 
    product, 
    appVersion, 
    userAgent, 
    language,
    onLine,
    javaEnabled,
    hostname,
    locale, 
    timeZone, 
    viewportHeight, 
    viewportWidth } = req.body;

    console.log(hitDate, 
      hitTime,
      appName, 
      appCodeName, 
      platform, 
      product, 
      appVersion, 
      userAgent, 
      language,
      onLine,
      javaEnabled,
      hostname,
      locale, 
      timeZone, 
      viewportHeight, 
      viewportWidth);

      // console.log(Object.keys(req.body));

      const queryString = "INSERT INTO visitor_hits (" + Object.keys(req.body) + ") VALUES ('" + hitDate + "','" + hitTime + "','"+ appName + "','"+ appCodeName + "','" + platform + "','" + product + "','" + appVersion + "','" + userAgent + "','" + language + "'," + onLine + "," + javaEnabled + ",'" + hostname + "','" + locale + "','" + timeZone + "'," + viewportHeight + "," + viewportWidth + ");"

      // console.log("QueryString: ***********", queryString);

      visitor.create(queryString, function(result) {
        res.json({ id: result.insertId });
      });
    });

module.exports = app;