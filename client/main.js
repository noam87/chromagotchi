var render = require("./view/out");
var input = require("./view/in");
var Model = require("./model");
var controller = require("./controller/in");
var out = require("./controller/out");

window.saveImage = Model.set;

$(document).ready(function() {
  var test = Model.get();

  render(test);
  input();
  controller();
  out();
});
