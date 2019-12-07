'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname + '')));

// app.get('/', (req, res) => res.sendFile('./index.html'));

// app.listen(port, function () {
// 	console.log('listen on ' + port);
// });

app.listen(port);