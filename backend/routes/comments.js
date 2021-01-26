const express = require('express')
const router = express.Router()
const Comments = require('../models/Comments')
const Tweet = require('../models/Tweets')


//saving the tweet in db
router.post('/comment', async (req, res) => {
    // console.log(req.body)
    const comment = new Comments({
        userid: req.body.userid,
        comment: req.body.comment,
        img: req.body.img,
        likes: 0
    })
    await comment.save()
    const tweet = await Tweet.findOne({ _id: req.body.tweetid })
    tweet.comments.push(comment)
    Tweet.updateOne({ _id: req.body.tweetid }, { comments: tweet.comments }, (err, tweet) => {
        if (err) {
            return res.status(400).send(err);
        }
        if (tweet) {
            return res.status(200).send(tweet);
        }
    })
})

//the comment likes
//like
router.post('/commentlike', async (req, res) => {
    console.log(req.body)
    Comments.findOne({ _id: req.body.commentid }, (err, comment) => {
        if (err)
            return res.status(400).send(err);
        if (comment) {
            comment.likes = comment.likes + 1
            Comments.updateOne({ _id: req.body.commentid }, { likes: comment.likes }, (err, data) => {
                if (err)
                    return res.status(400).send(err);
                if (data) {
                    return res.status(200).send('liked')
                }
            })
        }
    })
})
//unlike
router.post('/commentunlike', async (req, res) => {
    console.log(req.body)
    Comments.findOne({ _id: req.body.commentid }, (err, comment) => {
        if (err)
            return res.status(400).send(err);
        if (comment) {
            comment.likes = comment.likes - 1
            Comments.updateOne({ _id: req.body.commentid }, { likes: comment.likes }, (err, data) => {
                if (err)
                    return res.status(400).send(err);
                if (data) {
                    return res.status(200).send('unliked')
                }
            })
        }
    })
})
module.exports = router

