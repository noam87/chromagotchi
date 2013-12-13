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
