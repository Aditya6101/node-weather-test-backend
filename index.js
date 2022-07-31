const express = require("express");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const weather = require("./routes/weatherRoutes");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// connect to db
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/weather", weather);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
