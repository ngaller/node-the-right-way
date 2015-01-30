var fs = require("fs");

fs.watch("target.txt", function() {
  console.log("File was modified!");
});

