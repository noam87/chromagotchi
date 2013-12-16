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
