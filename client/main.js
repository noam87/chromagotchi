var render = require("./view/out");
var input = require("./view/in");

$(document).ready(function() {
  var test = [
   [{ uni: 0  }, { uni: 2 }, { uni: 1 }, { uni: 0 }, { uni: 3  }, { uni: 0 }],
   [{ uni: 2  }, { uni: 3 }, { uni: 4 }, { uni: 0  }, { uni: 0 }, { uni: 1 }],
   [{ uni: 3  }, { uni: 0 }, { uni: 2  }, { uni: 3 }, { uni: 0 }, { uni: 1 }],
  ];

  render(test);
  input();
});
