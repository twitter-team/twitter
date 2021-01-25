const mongoose = require('mongoose')


const tweetSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    caption: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    likes: {
        type: Number
    },
    saved: {
        type: Number
    },
    retweets: {
        type: Number
    },
    // fav: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //     }
    // ],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments', 
    }]
}, { timestamps: true })


//Create the model according to Scheema
const Tweet = mongoose.model('Tweet', tweetSchema);


//exporting the model to use mongoose functions 
module.exports = Tweet