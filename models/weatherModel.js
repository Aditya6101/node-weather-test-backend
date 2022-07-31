const mongoose = require("mongoose");

const weatherSchema = mongoose.Schema(
  {
    city: {
      type: String,
      required: [true, "please add city"],
    },
    weather: {
      type: Array,
      required: [true, "please add weather data"],
    },
    main: {
      type: Object,
      required: [true, "please add weather data"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Weather", weatherSchema);
