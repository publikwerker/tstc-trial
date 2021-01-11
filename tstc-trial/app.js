require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const mysql = require("mysql");

const app = express();
const URI = process.env.MONGODB_URI ||'mongodb://localhost/tstc-trial';
const port = process.env.PORT || 8080;
const Profile = require( "./models/Profile");
const Visitor = require("./models/Visitor");
const Blog = require("./models/Blog");
const Collective = require("./models/Collective");
const Story = require("./models/Story");

// const HOST = process.env.MYSQL_CONNECTION_HOST;
// const PORT = process.env.MYSQL_CONNECTION_PORT;
// const USER = process.env.MYSQL_CONNECTION_USER;
// const PASSWORD = process.env.MYSQL_CONNECTION_PASSWORD;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


//MONGODB Connection Information
var options = {
  "server" : {
    "socketOptions" : {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000
    }
  },
  "replset" : {
    "socketOptions" : {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000
    }
  }
}

mongoose.connect(URI, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('success', () => {console, 'MongoDB successfully connected!'});

// // MySQL DB Connection Information 
// var MYSQLConnection = mysql.createConnection({
//   host: HOST,
//   port: PORT,
//   user: USER,
//   password: PASSWORD,
//   database: "visitor_log_db"
// });

// // Initiate MySQL Connection.
// MYSQLConnection.connect(function(err) {
//   if (err) {
//     console.error("error connecting to MYSQL: " + err.stack);
//     return;
//   }
//   console.log("connected to MYSQL as id " + MYSQLConnection.threadId);
//   });

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req,res) => res.send('tstc is online!'));

//Mongo DB
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }});
});

//Mongo DB
app.get('/collective', (req, res) => {
  Collective.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    };
  });
});

//Mongo DB
app.get('/profiles', async(req,res,next) => {
  try {
    let result = await Profile.find().exec();
    res.send(result);
  } catch (err) {
    res.status(500).send(err)
  }
});

//Mongo DB
app.get('/profile/:id', async(req,res,next) => {
  try {
    let profile = await Profile.findById(req.params.id).exec();
    res.send(profile);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Mongo DB
app.put('/profile/:id', async(req,res,next) => {
  try {
    let profile = await Profile.findById(req.params.id).exec();
    profile.set(req.body);
    let result = profile.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Mongo DB
app.delete('/profile/:id', async(req,res,next) => {
  try {
    let result = await Profile.deleteOne({ _id: req.params.id }).exec();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Mongo DB
app.get('/stories', (req, res) => {
  Stories.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    };
  });
});

//Mongo DB
app.post('/user', async (req,res,next) => {
  try {
    let user = new Profile(req.body);
    let result = await user.save();
    res.send(`Posting new user profile to database! ${result}`) 
  } catch(err){
    res.status(500).send(err);
  }
});

//  res.send(`Posting new user profile to database!`));

//Mongo DB
app.put('/user', function(req,res) {
  res.send(`Updating user profile in database!`)
});

//Mongo DB
app.delete('/user', (req,res) => {
  res.send(`Deleting user profile from database!`)
});


// //MYSQL 
// app.get('/visitor', (req,res) => {
//   console.log(req.body, "**************************This is the req.body variable from /visitor GET");
//   MYSQLConnection.query("SELECT * FROM visitor_hits", function(err, result) {
//     if (err) throw err;
//     console.log(result, "this is the result variable");

//     console.log(result.length);
//     res.send(result);
//   });

//   });

// app.get('/visitorCount', (req,res) => {  
//     MYSQLConnection.query("SELECT Count(*) FROM visitor_hits", function(err, result) {
//     if (err) throw err;
//     console.log(result, "this is the result variable from /visitorCount");
//     res.send(result);
//     })
//   });

// app.post('/visitor', (req,res) => {
//   const { 
//     hitDate, 
//     hitTime,
//     appName, 
//     appCodeName, 
//     platform, 
//     product, 
//     appVersion, 
//     userAgent, 
//     language,
//     onLine,
//     javaEnabled,
//     hostname,
//     locale, 
//     timeZone, 
//     viewportHeight, 
//     viewportWidth } = req.body;

//     console.log(hitDate, 
//       hitTime,
//       appName, 
//       appCodeName, 
//       platform, 
//       product, 
//       appVersion, 
//       userAgent, 
//       language,
//       onLine,
//       javaEnabled,
//       hostname,
//       locale, 
//       timeZone, 
//       viewportHeight, 
//       viewportWidth);

//       // console.log(Object.keys(req.body));

//       const queryString = "INSERT INTO visitor_hits (" + Object.keys(req.body) + ") VALUES ('" + hitDate + "','" + hitTime + "','"+ appName + "','"+ appCodeName + "','" + platform + "','" + product + "','" + appVersion + "','" + userAgent + "','" + language + "'," + onLine + "," + javaEnabled + ",'" + hostname + "','" + locale + "','" + timeZone + "'," + viewportHeight + "," + viewportWidth + ");"

//       // console.log("QueryString: ***********", queryString);

//   MYSQLConnection.query(queryString, function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }


//     MYSQLConnection.query("SELECT Count(*) FROM visitor_hits", function(err, result) {
//       if (err) throw err;
//       res.send(result);
//     });

//   });
// });


app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;