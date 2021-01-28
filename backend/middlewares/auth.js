const User = require('../models/User')
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {

  try {

    const token = req.header('Authorization') 
    if (token) {
      const decoded = await jwt.verify(token, process.env.SECRET) 
     
      const user = await User.findOne({ _id: decoded._id }).populate({ path: "bookmarks", populate: { path: "comments", populate: { path: "userid" } } }).populate("following").populate("followers").populate({ path: "tweets", populate: { path: "comments", populate: { path: "userid" } } }).populate({ path: "retweets", populate: { path: "comments", populate: { path: "userid" } } }).populate({ path: "likes", populate: { path: "comments", populate: { path: "userid" } } })
      req.user = user
      next()

    } else {
      throw Error
    }
  } catch {

    res.status(401).json({ success: false, text: 'Log in first please' })
  }
}




module.exports = auth