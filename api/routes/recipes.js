var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myInterestsDB",
  {useNewUrlParser: true,
  useUnifiedTopology: true})

var recipeSchema = new mongoose.Schema({
  title: String,
  descriptions: String,
  author: String,
  website: String,
  url: String,
  image: String,
  servings: String,
  time: String,
  ingredients: Array,
  prep: Array,
  cooked: Boolean,
  cooked_date: Array,
  keywords: Array,
  rating: Number
})

var Recipe = mongoose.model("Recipe", recipeSchema)

/* GET users listing. */
router.get('/', async function(req, res, next) {
   await Recipe.find({}, (err, data) => {
    //  console.log("req is: ", req)
    //  console.log("res is: ", res)
    // console.log(params) throws an error
    // console.log(req.params) prints out {}
     res.send(data)
   } )
});

module.exports = router;
