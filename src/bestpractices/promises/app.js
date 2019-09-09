'use strict';

function asyncMethod(message) {
  return new Promise(function (fulfill, reject) {

    setTimeout(function () {
      console.log(message);
      fulfill();
    }, 500);
  });
}

// Xmas tree code below
// asyncMethod('Open DB connection', function () {
//   asyncMethod('Find User', function () {
//     asyncMethod('Validate User', function () {
//       asyncMethod('do something', function () { });
//     })
//   });
// });

function findUser() {
  return asyncMethod('Find User');
};

function validateUser() {
  return asyncMethod('Validate User');
};

function doStuff() {
  return asyncMethod('do something');
};

asyncMethod('Open DB connection')
  .then(findUser) // could do .then(findUser, error) in case promise reject
  .then(validateUser)
  .then(doStuff)
  .then(function () { });
