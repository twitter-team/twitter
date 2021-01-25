const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/twitter?retryWrites=true&w=majority",
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
app.use('/api/tweets', require('./backend/routes/tweets'))
// app.use('/api/comments', require('./backend/routes/comments'))



app.listen(process.env.PORT || 5000, () => console.log(`Server has started.`))
