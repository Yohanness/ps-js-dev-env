'use strict'; // command babel-cli : babel app.js -o es6.js

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function asyncMethod(message, num) {
  return new Promise(function (fulfill, reject) {
    setTimeout(function () {
      console.log(message + ' ' + num);
      fulfill(num + 1);
    }, 500);
  });
} // Xmas tree code below
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


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var one, two, three, four;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return asyncMethod('Open DB connection', 1);

          case 2:
            one = _context.sent;
            _context.next = 5;
            return asyncMethod('Find User', one);

          case 5:
            two = _context.sent;
            _context.next = 8;
            return asyncMethod('Validate User', two);

          case 8:
            three = _context.sent;
            _context.next = 11;
            return asyncMethod('do something', three);

          case 11:
            four = _context.sent;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();
