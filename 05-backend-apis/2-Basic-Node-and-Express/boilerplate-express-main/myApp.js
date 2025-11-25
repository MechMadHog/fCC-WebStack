console.log("Hello World");

let express = require('express');
let app = express();

// 2
app.get("/", function(req, res) {
  res.send("Hello Express");
});

// Export the app for testing
module.exports = app;
