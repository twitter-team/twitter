const express = require('express')
const router = express.Router()
const Comments = require('../models/Comments')


//saving the tweet in db
router.post('/comment', async (req, res) => {
    console.log(req.body)
        const comment = new Comments({
            userid: req.body.userid,
            tweetid: req.body.tweetid,
            comment: req.body.comment,
            img: req.body.img,
            // likes: req.body.likes
        })
         const x= await comment.save()
         res.json(x)
         console.log(x)
})

//retrive the comments for this tweet
router.post('/comments', async (req, res) => {
    console.log(req.body)
    Comments.find({ tweetid: req.body.tweetid }, (err, comments) => {
        if (err)
            return res.status(400).send(err);
        if (comments) {
            return res.status(200).send(comments)
        }
    })
})
 
//the comment likes
//like
router.post('/commentlike', async (req, res) => {
    console.log(req.body)
    Comments.findOne({ _id: req.body.commentid}, (err, comment) => {
        if (err)
            return res.status(400).send(err);
        if (comment) {
            comment.likes=comment.likes+1
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
    Comments.findOne({ _id: req.body.commentid}, (err, comment) => {
        if (err)
            return res.status(400).send(err);
        if (comment) {
            comment.likes=comment.likes-1
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
module.exports = router

