;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Model = require("../../model");

module.exports = update;
function update() {
  $("#canvas").on("imageUpdated", updateModel);

  function updateModel()  {
    console.log("updateArray: ", window.updateArray);
    Model.update(window.updateArray);
  }
}

},{"../../model":4}],2:[function(require,module,exports){
var render = require("../../view/out");
var Model = require("../../model");

module.exports = function()  {
  $("#canvas").on("imageUpdated", updateView);

  function updateView() {
    var img = Model.get();
    render(img);
  }
}

},{"../../model":4,"../../view/out":6}],3:[function(require,module,exports){
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

},{"./controller/in":1,"./controller/out":2,"./model":4,"./view/in":5,"./view/out":6}],4:[function(require,module,exports){
module.exports.set = set;
function set(array) {
  if (!array) var array = [
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 2  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }, { "uni": 0 }, { "uni": 0 }, { "uni": 0  }, { "uni": 0 }]
  ];
  array = JSON.stringify(array);
  
  localStorage.setItem("chromagotchi", array);
}

module.exports.get = get;
function get()  {
  var image = localStorage.getItem("chromagotchi");
  image = JSON.parse(image);
  return image;
}

module.exports.update = update;
function update(updateArray)  {
  var array = get();
  var i = updateArray[0];
  var j = updateArray[1];
  var pixel = { uni: updateArray[2].uni, color: updateArray[2].color };

  array[i][j] = pixel;

  set(array);
}

},{}],5:[function(require,module,exports){
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

  var thing  = $("#canvas").on("click", getArray);
  console.log("thing:", thing);
}


function getArray(e)  {
  var $block = $(e.target);
  var i = $block.parent().index();
  var j = $block.index();
  var pixel = {  };
  pixel.uni = $("#uni-select").val();
  pixel.uni = parseInt(pixel.uni);
  pixel.color = $("#color-select").val();

  window.updateArray = [i, j, pixel];
  $("#canvas").trigger("imageUpdated");
}

},{}],6:[function(require,module,exports){
// the view/out module takes input of the form
//
//  [ 
//    [ pixel, ..., pixel ],
//        .
//            .
//                .        ,
//    [ pixel, ..., pixel] 
//  ]
//
// and outputs an HTML string of the form
// 
//  <div>
//    <span>pixel.uni</span>
//    ...
//    <span>pixel.uni</span>
//  </div>
//
// where each div is a pixel array of unicode chars.

module.exports = render;
function render(input) {
  var unis = ["&#x2588;", "&#x2593;", "&#x2592;", "&#x2591;", "&nbsp;"];
  var $canvas = $("#canvas");

  createRows(input);
  createPixels(input);


  function createRows(input) {
    $canvas.html("");
    input.forEach(createRow);

    function createRow(row) {
      $canvas.append("<div></div>") ;
    }
  }

  function createPixels(input)  {
    input.forEach(renderPixels);

    function renderPixels(row, index)  {
      row.forEach(function(pixelObj) { 
        if (pixelObj.color) var color = pixelObj.color;
        else var color = "black";
        var block = toBlock(pixelObj.uni);
        var $pixel = $("<span></span>").html(block).attr("style", "color:" + color + ";");
        var $row = $( $canvas.find("div").get(index) );
        $row.append($pixel);
      });
    }
  }

  function toBlock(uni) {
    return unis[uni];
  }
}




},{}]},{},[3])
;