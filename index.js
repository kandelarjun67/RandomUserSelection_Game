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
const userSchema = new Schema({
    name: {
      type: String,
      required: true
      // unique:true
    },
    ticketNumber: Number,
    color:String
  },
    { collection: 'users' })

  // creation of model
  const Users = mongoose.model('Users', userSchema);

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


  // data 
const winnerTicket = 33
const tiketLists = [
  { name:'arjun', ticket: 32},
  { name:'pradeep', ticket: 33},
  { name:'karan', ticket: 34},
  { name:'sunil', ticket: 35},
  { name:'ranveer', ticket: 36},
  { name:'prakash', ticket: 37},

]

app.get('/ticket', async(req, res) => {
    try{
  
    const data = await Users.find()
    res.json({
      ticketList: tiketLists,
      winnerTicket: winnerTicket
    //   ticketList: data,
    })
  }catch(err){
    console.log(err)
  }
  })
  
  app.get('/tickets/:ticketno', (req, res) => {
    // console.log('working')     // using the params 
    console.log(req.params.ticketno)  
  })
  
  app.post('/register', async (req, res) => {
    try {
      const data = await Users.create(req.body)
      if (data) {
        res.json({
          msg: 'user registered'
        })
      } else {
        res.json({
          msg: 'registration failed'
        })
      }
    } catch (err) {
      console.log(err)
    }
  
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})