const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweets')
const User = require('../models/User')


//saving the tweet in db
router.post('/tweet', async (req, res) => {

        const tweet = new Tweet({
            userid: req.body.userid,
            caption: req.body.caption,
            img: req.body.img,
            likes: 0,
            saved: 0,
            retweets:0,
        })
         const x= await tweet.save()
      
      const user= await User.findOne({ _id: req.body.userid })
      console.log(user)
      user.tweets.push(tweet)
      User.updateOne({_id:req.body.userid},{tweets:user.tweets},(err,user)=>{
      if(err){
        return res.status(400).send(err);
      }
      if(user){
        return res.status(200).send(user);
      }
      })
      
})
//retriving all the tweets
router.post('/tweets', async (req, res) => {
  const tweets= await Tweet.find().populate('userid').populate("comments")
  res.send(tweets)
})



module.exports = router

