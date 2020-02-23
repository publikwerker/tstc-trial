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

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app