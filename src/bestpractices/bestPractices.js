// 1) use lint with rules for ; and === enforcing
// 2) Always declare var at tope of scope
// 3) a) use strict prevents JS to add stuff for me
//    b) also throw error if writing read only property
//    c) also throw error if you 'delete' a var or object being used after
//    d) also throw error if you duplicate param names in func parameters
//    e) also throw error if using octal numbers (number starting with '0')
//    f) also throw error if using with keyword (do not use with) - Use IIFE instead if long obj.a.b.c.d...
//    g) also throw error if function is called without this being assigned (if this is the global scope)
// 4) Left side of '.' is the 'this'. Also bind(obj) passes obj as 'this'
//    So if func is executed : if nothing before (no <smthing>.func(), or no 'new') or no .bind(objForThis) after --> this is global scope
//    new creates a 'this' scope inside function
// 5) COPY this  : Assign this to _this or ctrl to not lose scope (see newObj.js)



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
