const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());

let redScore = 0;
let blueScore = 0;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/scores', (req, res) => {
	res.append('Access-Control-Allow-Origin', '*');
	res.json({
		redScore,
		blueScore,
	});
});

app.post('/', (req, res) => {
	redScore = req.body['redScore'];
	blueScore = req.body['blueScore'];
	console.log(`Red: ${redScore} | Blue: ${blueScore}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
