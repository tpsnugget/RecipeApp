var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myInterestsDB",
  {useNewUrlParser: true,
  useUnifiedTopology: true})

var recipeSchema = new mongoose.Schema({
  title: {
     type: String,
     required: true
  },
  description: String,
  author: String,
  website: String,
  url: String,
  image: String,
  servings: String,
  time: String,
  ingredients: Array,
  prep: Array
})

var Recipe = mongoose.model("Recipe", recipeSchema)

/* Get All Recipes */
router.get('/', async function(req, res) {
   await Recipe.find(req.query, (err, data) => {
    //  console.log("req is: ", req)
    //  console.log("res is: ", res)
    // console.log(params) throws an error
    // console.log(req.params) prints out {}

    // This sends an array of objects from the db
    // console.log("data in server side router: ", data)

     res.send(data)
   } )
});

/* Add New Recipe */
router.post('/', async function (req, res) {
  const newRecipe = req.body
  await Recipe.create(newRecipe, (err, data) => {
     if (err) {
        console.error(err.errmsg)
        res.send(err)
     } else {
        console.log(data)
        res.send(data)
     }
  })
});

/* Delete One Recipe */
router.delete('/', async function (req, res) {
   const deleteRecipe = req.query
   await Recipe.findByIdAndRemove(deleteRecipe, (err, data) => {
      if (err) {
         console.error(err.errmsg)
         res.send(err)
      } else {
         console.log(data)
         res.send(data)
      }
   })
 });

 /* Put (Update) One Recipe */
 router.put('/', async function (req, res) {
    await Recipe.findByIdAndUpdate({_id: req.body._id}, req.body, (err, data) => {
      if (err) {
         console.error(err.errmsg)
         res.send(err)
      } else {
         console.log(data)
         res.send(data)
      }
    })
 })

module.exports = router;
