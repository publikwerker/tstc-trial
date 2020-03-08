const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;
const Profile = require( "./models/Profile");
const Visitor = require("./models/Visitor");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

mongoose.connect('mongodb://localhost/tstc-trial')

// const config = {
// 	db: { 					// Database configuration. 
//     url: 'mongodb://localhost/tstc-trial',
//     type: 'mongo',
// 		onError: (err) => {
// 			console.log('DB Connection Failed!')
// 		},
// 		onSuccess: () => {
// 			console.log('DB Successfully Connected!')
// 		}
// 	}
// }
const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req,res) => res.send('tstc is online!'));

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

app.post('/visitor', async (req,res) => {
  try {
    let visitor = new Visitor(req.body);
    let result = await visitor.save();
    res.send(`Posting visitor info to database! ${result}`)   
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