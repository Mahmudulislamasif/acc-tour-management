const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const { info } = require("daisyui/src/colors");

app.use(express.json());
app.use(cors());

const tourRoute=require('./routes/tour.route')


app.get("/", (req, res) => {
 res.send('it is working')
});

//posting 
app.use('/tours',tourRoute)
// get data
app.use('/tours',tourRoute)


module.exports = app;
