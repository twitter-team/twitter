const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.DB_CONNECT,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
  
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



app.use('/api/user', require('./backend/routes/user'))



app.listen(process.env.PORT || 5000, () => console.log(`Server has started.`))
