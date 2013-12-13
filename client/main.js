var render = require("./view/out");
var input = require("./view/in");
var Model = require("./model");

window.saveImage = Model.set;

$(document).ready(function() {
  var test = Model.get();

  render(test);
  input();
});
