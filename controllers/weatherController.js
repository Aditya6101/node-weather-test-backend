const asyncHandler = require("express-async-handler");
const Weather = require("../models/weatherModel");

// @desc    Get Weather
// @route   GET /weather
const getWeather = asyncHandler(async (req, res) => {
  const weatherData = await Weather.find();
  console.log(weatherData);
  res.status(200).send(weatherData);
});

// @desc    Create weather data
// @route   POST  /weather
const createWeather = asyncHandler(async (req, res) => {
  const { city, weather, main } = req.body;
  const weatherData = await Weather.create({
    city,
    weather,
    main,
  });

  res.status(201).send(weatherData);
});

module.exports = { getWeather, createWeather };
