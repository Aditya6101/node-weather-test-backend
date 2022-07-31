const express = require("express");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const weather = require("./routes/weatherRoutes");

// connect to db
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/weather", weather);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
