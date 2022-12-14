const express = require('express')
const app = express()
const port = 4000

//cors
const cors = require('cors')
app.use(cors())

//bodyParser() 
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// mongoose & schema
const mongoose = require('mongoose')
const { Schema } = mongoose;

// schema creation 


// connect to database
const connect = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/userSelection', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected to MongoDB");     // connect to database name userSelection
    } catch (error) {
      console.error(error);
    }
  }
  connect()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})