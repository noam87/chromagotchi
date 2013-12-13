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



