const mongoose = require('mongoose')


const commentsSchema = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    img:{
        type:String
    }
}, { timestamps: true })


//Create the model according to Scheema
const Comments = mongoose.model('Comments', commentsSchema);


//exporting the model to use mongoose functions 
module.exports = Comments