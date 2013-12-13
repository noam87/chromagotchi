var render = require("../../view/out");
var Model = require("../../model");

module.exports = function()  {
  $("#canvas").on("imageUpdated", updateView);

  function updateView() {
    var img = Model.get();
    render(img);
  }
}
