const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(moragan('dev')); //logs requests to the console

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// Iniciar o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
});
