var express = require('express');
var router = express.Router();
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/myInterestsDB",
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })

var userSchema = new mongoose.Schema({
   first: String,
   last: String,
   username: String,
   email: String,
   password: String
})

var User = mongoose.model("User", userSchema)

/* Add New User */
router.post('/', async function (req, res) {
   const newUser = req.body
   await User.create(newUser, (err, data) => {
      if (err) {
         console.error(err.errmsg)
         res.send(err)
      } else {
         console.log(data)
         res.send(data)
      }
   })
});

/* Get Login Data for One User */
router.get('/', async function (req, res) {
   const userLogin = req.query
   console.log("server req.query: ", userLogin)
   await User.findOne(userLogin, (err, data) => {
      if (err) {
         console.error(err.errmsg)
         res.send(err)
      } else {
         console.log(data)
         res.send(data)
      }
   })
});

module.exports = router;
