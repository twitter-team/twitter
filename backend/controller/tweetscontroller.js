const Tweet = require('./models/Tweets.js');

let TweetController =
{
    find: async (req, res) => {
        let found = await Tweet.find({ userid: req.params.userid });
        res.json(found);

    },
    // findId: async (req, res) => {
    //     let found = await Category.find({ CategoryID: req.params.CategoryID });
    //     res.json(found);
        
    // },
    all: async (req, res) => {
        let alltweets = await Tweet.find();
        res.json(alltweets);
    },
    create: async (req, res) => {
        let newCategory = new alltweets(req.body);
        let saveCategory = await newCategory.save();
        res.json(saveCategory);
    },
    // getAllRestaurant: async (req, res) => {
    //     let foundCategory = await Category.find({ name: req.params.Name }).populate('restaurants');
    //     res.json(foundCategory)
    // }


}


module.exports = TweetController