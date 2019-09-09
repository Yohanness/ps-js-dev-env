// 1) use lint with rules for ; and === enforcing
// 2) Always declare var at tope of scope
// 3) a) use strict prevents JS to add stuff for me
//    b) also throw error if writing read only property
//    c) also throw error if you 'delete' a var or object being used after
//    d) also throw error if you duplicate param names in func parameters
//    e) also throw error if using octal numbers (number starting with '0')
//    f) also throw error if using with keyword (do not use with) - Use IIFE instead if long obj.a.b.c.d...
//    g) also throw error if function is called without this being assigned (if this is the global scope)
// 4) Left side of '.' will become the 'this'. Also bind(obj) passes obj as 'this'
//    So if func is executed : if nothing before (no <smthing>.func(), or no 'new') or no .bind(objForThis) after --> this is global scope
//    new creates a 'this' scope inside function
//    https://www.tutorialsteacher.com/javascript/new-keyword-in-javascript
// 5) COPY 'this'  : Assign this to _this or ctrl to not lose scope (see newObj.js)
// 6) Callbacks : don't use anonymous functions as callbacks or it looks like a Xmas tree
//             a.   name functions
//             b.   callbacks always func (error, result)
//             c.   always return the callbacks ( return callbackFunc(err, res); ), so we know we are done
// 7) Promises : Just in case for browser who do not support, take polyfill from promisejs.org
//              Cascade then().then() for more readable
// 8) Async / Await : From ES7, needs babel to transpile
//            a. use babel preset stage-3 (see kangax site)
//            b. Using 'await' will simply wait for function to return something
// 9)  in prod, for npm :
//       a. set configs : npm config set save=true & save-exact=true
//       b. set in packages.json : engines : node>= 10.1.0 e.g
// 10)  in prod, environment : use tool nodeforeman, .env file, and nf start command
// 10)  in prod, for cross platform : always use lower case with dash, like this: my-object.js

// var first
var x = 10;

//functions next

function print(input) {
  //variable first
  var x = 0;
  //functions next
  function log () {
    //log stuff
  }
  // run code
  console.log(input);
}
// run code
print(10);
