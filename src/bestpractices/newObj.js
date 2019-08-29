var obj = function() {

  var _this = this; // or in Angular you see :  var ctrl = this;

  console.log(this);
  _this.hello = 'hello';

  _this.greet = function () {
    console.log(_this.hello);
  }

  this.delayGreeting = function () {
    // setTimeout(this.greet, 1000);
    // setTimeout(this.greet.bind(this), 1000);
    setTimeout(_this.greet, 1000);
  }
}

var greeter = new obj();

greeter.delayGreeting();
