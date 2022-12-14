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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})