const express = require('express');
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

app.get('/', (req,res) => res.send('tstc is online!'));

app.post('/vistor', (req, res) => {
  res.send(`Posting visitor info to database!`)
});

app.post('/user', (req,res) => {
  res.send(`Posting new user profile to database!`)
});

app.put('/user', (req,res) => {
  res.send(`Updating user profile in database!`)
});

app.delete('/user', (req,res) => {
  res.send(`Deleting user profile from database!`)
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app