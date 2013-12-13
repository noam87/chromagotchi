var Model = require("../../model");

module.exports = update;
function update() {
  $("#canvas").on("imageUpdated", updateModel);

  function updateModel()  {
    console.log("updateArray: ", window.updateArray);
    Model.update(window.updateArray);
  }
}
