const express = require('express')
const router = express.Router()
const User = require('../models/User')
const auth = require('../middlewares/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Tweet = require('../models/Tweets')

router.get('/auth', auth, (req, res) => {
    res.json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        number: req.user.number,
        address: req.user.address,
        success: true
    })
})


router.post('/signup', async (req, res) => {
    console.log(req.body)

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPw = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPw,
            mobile: req.body.mobile,
            address: req.body.address
        })

        await user.save()
        const token = await jwt.sign({ _id: user._id }, "mysecret")
        res.header("Authorization", token).status(201).json({
            sucess: true,
            user,
            token: token
        })

    }
    catch (err) {
        res.status(404).json({ sucess: false, err })
    }


})

router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        const match = await bcrypt.compare(req.body.password, user.password)
        // console.log(match)
        if (match) {
            const token = await jwt.sign({ _id: user._id }, "mysecret")
            res.header('Authorization', token).status(201).json({
                success: true,
                token,
                user
            })
        }
    } catch (err) {
        res.status(404).json({ success: false, err })
    }

})
// route for the fav & followers & following & tweets (post)
//geting the userinfo 
router.post('/profile', async (req, res) => {
    console.log(req.body.userid)
    await User.findOne({ _id: req.body.userid }).populate("bookmarks").populate("following").populate("followers").populate("tweets").populate("retweets").populate("likes")
        .exec((err, user) => {
            if (err) return res.status(404).json({ success: false })
            console.log(user, 'user')
            res.json(user)
        })
})

//update fo each one postreq() x10
//the user can't make anyone not to unfollow him but can unfollow / follow anyone 
//if i want to follow someone i need both of the users id 
router.post('/follow', async (req, res) => {
    //the id of the one that i am going to follow 
    console.log(req.body.userid)
    //the id of the one who is going to follow the other 
    console.log(req.body.meid)
    await User.findOne({ _id: req.body.userid }, (err, user) => {
        if (err)
            return res.status(400).send(err);
        if (user) {
            user.followers.push(req.body.meid)
            User.updateOne({ _id: req.body.userid }, { followers: followers }, (err, updated) => {
                if (err)
                    return res.status(400).send(err);
                if (updated) {
                    User.findOne({ _id: req.body.meid }, (err, user1) => {
                            if (err)
                                return res.status(400).send(err);
                            if (user1) {
                                user1.following.push(req.body.userid)
                                //update it in the database 
                                User.updateOne({ _id: req.body.meid }, { following: following }, (err, data) => {
                                        if (err)
                                            return res.status(400).send(err);
                                        if (data) {
                                            return res.status(200).send('followed')
                                        }
                                })
                            }
                    })
                }
            })
        }
    })
})
//the unfollow route
router.post('/unfollow', async (req, res) => {
    //the id of the one that i am going to follow 
    console.log(req.body.userid)
    //the id of the one who is going to follow the other 
    console.log(req.body.meid)
    //find the user
    await User.findOne({ _id: req.body.userid }, (err, user) => {
        if (err)
            return res.status(400).send(err);
        if (user) {
            let followers = user.followers.filter((element, i) => {
                return element.toString() !== req.body.meid
            })
            User.updateOne({ _id: req.body.userid }, { followers: followers }, (err, updated) => {
                if (err)
                    return res.status(400).send(err);
                if (updated) {
                    User.findOne({ _id: req.body.meid }, (err, user1) => {
                            if (err)
                                return res.status(400).send(err);
                            if (user1) {
                                let following = user1.following.filter((element, i) => {
                                    return element.toString() !== req.body.userid
                                })
                                // console.log('following line 158', following)
                                //update it in the database 
                                User.updateOne({ _id: req.body.meid }, { following: following }, (err, data) => {
                                        if (err)
                                            return res.status(400).send(err);
                                        if (data) {
                                            return res.status(200).send('unfollowed')
                                        }
                                })
                            }
                    })
                }
            })
        }
    })
})

//bookmark route
//add 
router.post('/addBookmark', async (req, res) => {
    await User.findOne({ _id: req.body.userid }, (err, user) => {
        if (err)
            return res.status(400).send(err);
        if (user) {
            let bookmarks = user.bookmarks.filter((element, i) => {
                return element.toString() !== req.body.tweetid
            })
            User.updateOne({ _id: req.body.userid }, { bookmarks: bookmarks }, (err, updated) => {
                if (err)
                    return res.status(400).send(err);
                if (updated) {
                    Tweet.findOne({ _id: req.body.tweetid }, (err, tweet) => {
                        if (err)
                            return res.status(400).send(err);
                        if (tweet) {
                            tweet.saved = tweet.saved +1
                            Tweet.updateOne({ _id: req.body.tweetid }, { saved: tweet.saved }, (err, data) => {
                                if (err)
                                    return res.status(400).send(err);
                                if (data) {
                                    return res.status(200).send('done')
                                }
                            })
                        }
                    })
                }
            })
        }
    })

})
//delete 
router.post('/deleteBookmark', async (req, res) => {
    console.log(req.body)
    await User.findOne({ _id: req.body.userid }, (err, user) => {
        if (err)
            return res.status(400).send(err);
        if (user) {
            let bookmarks = user.bookmarks.filter((element, i) => {
                return element.toString() !== req.body.tweetid
            })
            User.updateOne({ _id: req.body.userid }, { bookmarks: bookmarks }, (err, updated) => {
                if (err)
                    return res.status(400).send(err);
                if (updated) {
                    Tweet.findOne({ _id: req.body.tweetid }, (err, tweet) => {
                        if (err)
                            return res.status(400).send(err);
                        if (tweet) {
                            tweet.saved = tweet.saved - 1
                            Tweet.updateOne({ _id: req.body.tweetid }, { saved: tweet.saved }, (err, data) => {
                                if (err)
                                    return res.status(400).send(err);
                                if (data) {
                                    return res.status(200).send('done')
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})
module.exports = router




