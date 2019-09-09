'use strict';

// command babel-cli : babel app.js -o es6.js

function asyncMethod(message, num) {
  return new Promise(function (fulfill, reject) {

    setTimeout(function () {
      console.log(message +' ' + num);
      fulfill(num + 1);
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

// Using promises was :
// asyncMethod('Open DB connection')
//     .then(findUser) // could do .then(findUser, error) in case promise reject
//     .then(validateUser)
//     .then(doStuff)
//     .then(function () { });

async function main() {

  var one = await asyncMethod('Open DB connection', 0);
  var two = await asyncMethod('Find User', one);
  var three = await asyncMethod('Validate User', two);
  var four = await asyncMethod('do something', three);

}

main();
