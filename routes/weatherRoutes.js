const express = require("express");
const router = express.Router();

// controllers
const {
  getWeather,
  createWeather,
} = require("../controllers/weatherController");

router.route("/").get(getWeather).post(createWeather);

module.exports = router;
