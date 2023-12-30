const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');

//dotenv config
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(moragan('dev')); //logs requests to the console

// Routes
app.get('/', () => {
    res.status(200).send({
        message: 'Server running',
    });
});

// Iniciar o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
});
++