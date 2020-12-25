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
    mobile: {
        type: Number
    },
    address: {
        type: String
    },
    role: {
        type: String
    }

}, { timestamps: true })


//Create the model according to Scheema
const User = mongoose.model('User', userSchema);


//exporting the model to use mongoose functions 
module.exports = User