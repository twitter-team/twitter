const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
};
var io = require('socket.io')(server,options)


mongoose.connect(process.env.DB_CONNECT,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
  
    .then(() => console.log('MongoDB Connected correctly ...'))
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



app.use('/api/user', require('./routes/user'))



server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`))
