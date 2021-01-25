const express = require('express')
const router = express.Router()
const Tweet = require('../models/Tweets')


//saving the tweet in db
router.post('/tweet', async (req, res) => {
    console.log(req.body)

        const tweet = new Tweet({
            userid: req.body.userid,
            caption: req.body.caption,
            img: req.body.img,
            likes: req.body.likes,
            saved: req.body.saved,
            retweets:req.body.retweets,
        })
         const x= await tweet.save()
         res.json(x)
         console.log(x)
})





module.exports = router

