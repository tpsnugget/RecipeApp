var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myInterestsDB",
  {useNewUrlParser: true,
  useUnifiedTopology: true})

var userSchema = new mongoose.Schema({
  first: String,
  last: String,
  username: String,
  email: String,
  password: String
})

var User = mongoose.model("User", userSchema)

/* GET users listing. */
router.post('/', async function(req, res, next) {
   const newUser = req.body
   console.log("newUser in signup: ", newUser)
   await User.create(newUser, (err, data) => {
    //  console.log("req is: ", req)
    //  console.log("res is: ", res)
    // console.log(params) throws an error
    // console.log(req.params) prints out {}

      console.log(data)
     res.send(data)
   } )
});

module.exports = router;
