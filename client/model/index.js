module.exports.set = set;
function set(array) {
  if (!array) var array = [
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 2  }, { "uni": 3 }, { "uni": 4 }, { "uni": 0 }, { "uni": 0 }, { "uni": 1 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 3  }, { "uni": 0 }, { "uni": 2 }, { "uni": 3 }, { "uni": 0 }, { "uni": 1 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 3  }, { "uni": 3 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 3  }, { "uni": 0 }, { "uni": 1 }, { "uni": 2 }, { "uni": 3 }, { "uni": 2 }, { "uni": 2  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 0 }, { "uni": 1 }, { "uni": 2 }, { "uni": 3 }, { "uni": 2 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }],
   [{ "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3 }, { "uni": 0 }, { "uni": 0  }, { "uni": 2 }, { "uni": 1 }, { "uni": 0 }, { "uni": 3  }, { "uni": 0 }]
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
  var pixel = { uni: updateArray[2] };

  array[i][j] = pixel;

  set(array);
}
