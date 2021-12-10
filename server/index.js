const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')

// Import routes

const month = require('./routes/month');
const target = require('./routes/month');
const user = require('./routes/month');

const URI = "mongodb://localhost:27017";

mongoose.connect(URI, {
  dbName: 'user'
});

const db = mongoose.connection

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());

db.once("open", function () {
  app.listen(port,  () => {
    console.log(`App listening on port ${port}!`)
  });
})

// Use Routers

app.use(month);
app.use(target);
app.use(user);