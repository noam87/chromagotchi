var render = require("./view/out");

$(document).ready(function() {
  var test = [
   [{ uni: 0  }, { uni: 2 }, { uni: 1 }, { uni: 0 }, { uni: 3  }, { uni: 0 }],
   [{ uni: 2  }, { uni: 3 }, { uni: 4 }, { uni: 0  }, { uni: 0 }, { uni: 1 }],
   [{ uni: 3  }, { uni: 0 }, { uni: 2  }, { uni: 3 }, { uni: 0 }, { uni: 1 }],
  ];

  render(test);
});
