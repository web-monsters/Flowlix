'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + ''));

app.get('/', (req, res) => res.sendFile('./index.html'));

app.listen(port, function () {
	console.log('listen on ' + port);
});