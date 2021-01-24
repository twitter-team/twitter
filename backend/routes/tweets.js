const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweets')


//saving the tweet in db
router.post('/tweet',  (req, res) => {
    console.log(req.body)

        const tweet = new Tweet({
            userid: req.body.userid,
            caption: req.body.email,
            img: req.body.img,
            likes: req.body.likes,
            saved: req.body.saved,
            retweets:req.body.retweets,
            fav:req.body.fav,
            comments:req.body.comments
        })

        tweet.save((err, tweet) => {
            if (err) return res.status(404).json({ error })
            res.status(201).json({ id: tweet._id })
          })
})

//getting the user tweets 
router.get('/usertweets/:userid', async(req, res) => {
    try {

        const tweets = await Tweet.find({ userid: req.body.userid })
        // console.log(match)
        if (tweets) {
            res.json(tweets)
        }
    } catch (err) {
        res.status(404).json({ success: false, err })
    }

})



module.exports = router

