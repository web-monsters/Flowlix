'use strict';

import Repository from './Repository.js';

Repository.getData('http://jsonplaceholder.typicode.com/users', function (data) {
  return console.log(data);
});