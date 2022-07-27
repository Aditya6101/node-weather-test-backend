const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.send("hello world!");
});

app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});
