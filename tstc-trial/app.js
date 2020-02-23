const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const config = {
	db: { 					// Database configuration. 
    url: 'mongodb://localhost/tstc-trial',
    type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

express.static('public');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req,res) => res.send('tstc is online!'));

app.post('/visitor', (req,res) => res.send(`Posting visitor info to database!`));

app.post('/user', (req,res) => res.send(`Posting new user profile to database!`));

app.put('/user', function(req,res) {
  res.send(`Updating user profile in database!`)
});

app.delete('/user', (req,res) => {
  res.send(`Deleting user profile from database!`)
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app