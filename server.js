'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + ''));

app.get('/', (req, res) => res.sendFile('./index.html'));

app.listen(port, '0.0.0.0', function () {
	console.log('listen on ' + port);
});