'use strict';

var obj = {
  val: 'Hi there',
  printVal: function() {
    console.log(this.val);
  }
};

obj.printVal();
