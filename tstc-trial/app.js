require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mysql = require("mysql");
const app = express();
const URI = process.env.MONGODB_URI ||'mongodb://localhost/tstc-trial';
const port = process.env.PORT || 8080;
const Profile = require( "./models/Profile");
const Visitor = require("./models/Visitor");
const Blog = require("./models/Blog");
const Collective = require("./models/Collective");
const Story = require("./models/Story");

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

// MySQL DB Connection Information 
var MYSQLConnection = mysql.createConnection({
  host: process.env.MYSQL_CONNECTION_HOST,
  port: process.env.MYSQL_CONNECTION_PORT,
  user: process.env.MYSQL_CONNECTION_USER,
  password: process.env.MYSQL_CONNECTION_PASSWORD,
  database: "visitorLog_db"
});

// Initiate MySQL Connection.
MYSQLConnection.connect(function(err) {
  if (err) {
    console.error("error connecting to MYSQL: " + err.stack);
    return;
  }
  console.log("connected to MYSQL as id " + MYSQLConnection.threadId);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req,res) => res.send('tstc is online!'));

app.get('/blogs', (req, res) => {
    Blog.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }});
});

app.get('/collective', (req, res) => {
  Collective.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    };
  });
});

app.get('/profiles', async(req,res,next) => {
  try {
    let result = await Profile.find().exec();
    res.send(result);
  } catch (err) {
    res.status(500).send(err)
  }
});

app.get('/profile/:id', async(req,res,next) => {
  try {
    let profile = await Profile.findById(req.params.id).exec();
    res.send(profile);
  } catch (err) {
    res.status(500).send(err);
  }
});

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

app.delete('/profile/:id', async(req,res,next) => {
  try {
    let result = await Profile.deleteOne({ _id: req.params.id }).exec();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/stories', (req, res) => {
  Stories.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    };
  });
});

app.post('/visitor', async (req,res) => {
  console.log(req.body);
  try {
    let visitor = new Visitor(req.body);
    let result = await visitor.save();
    res.send(`Visitating! ${result}`)   
  } catch (err) {
    res.status(500).send(err);
  }
});

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

app.put('/user', function(req,res) {
  res.send(`Updating user profile in database!`)
});

app.delete('/user', (req,res) => {
  res.send(`Deleting user profile from database!`)
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app