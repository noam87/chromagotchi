// the view/in module takes a user click event on a unicode block and 
// returns an array of the form
//
//  [i, j, pixel]
//
//  representing the position and properties of the element to be updated in the
//  model.

module.exports = blockToArray;
function blockToArray()  {
  // for prototyping purposes only:
  if (!window.uni_) window.uni_ = 0;

  $("#canvas").on("click", getArray);
}


function getArray(e)  {
  var $block = $(e.target);
  var i = $block.parent().index();
  var j = $block.index();
  var pixel = { uni: window.uni_ };

  console.log([i, j, pixel]);
  return [i, j, pixel];
}
