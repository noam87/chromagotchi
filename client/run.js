;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var render = require("./view/out");
var input = require("./view/in");
var Model = require("./model");

window.saveImage = Model.set;

$(document).ready(function() {
  var test = Model.get();

  render(test);
  input();
});

},{"./model":2,"./view/in":3,"./view/out":4}],2:[function(require,module,exports){
module.exports.set = set;
function set() {
  var test = [
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 2  }, { "uni": 3 }, { "uni": 4 }, { "uni": 0  }, { "uni": 0 }, { "uni": 1 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 3  }, { "uni": 0 }, { "uni": 2  }, { "uni": 3 }, { "uni": 0 }, { "uni": 1 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 3  }, { "uni": 3 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 3  }, { "uni": 0 }, { "uni": 1 }, { "uni": 2 }, { "uni": 3  }, { "uni": 2 }, { "uni": 2  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 1 }, { "uni": 2 }, { "uni": 3  }, { "uni": 2 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }]
  ];
  test = JSON.stringify(test);
  
  localStorage.setItem("chromagotchi", test);
}

module.exports.get = get;
function get()  {
  var image = localStorage.getItem("chromagotchi");
  image = JSON.parse(image);
  return image;
}

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
  var unis = ["&#x2588;", "&#x2593;", "&#x2592;", "&#x2591;", " "];
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
        var block = toBlock(pixelObj.uni);
        var $pixel = $("<span></span>").html(block);
        var $row = $( $canvas.find("div").get(index) );
        $row.append($pixel);
      });
    }
  }

  function toBlock(uni) {
    return unis[uni];
  }
}




},{}]},{},[1])
;