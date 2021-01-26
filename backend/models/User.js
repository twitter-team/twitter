const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
    },
    password: {
        type: String,
        required: true
    },
    profilepic:{
        type:String
    },
    backgroundpic:{
        type:String
    },
    bio:{
        type:String
    },
    bookmarks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    tweets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
    }],
    retweets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
    }]

}, { timestamps: true })


//Create the model according to Scheema
const User = mongoose.model('User', userSchema);


//exporting the model to use mongoose functions 
module.exports = User