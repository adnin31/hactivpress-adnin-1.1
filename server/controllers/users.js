var User = require('../models/users')
var key = require('../helpers/key')
var encryptPassword =  require('../helpers/encrypt')
require('dotenv').config()
var jwt = require('jsonwebtoken');

function getAllUsers(req, res) {
    User.find()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}

function register (req, res) {
  var newKey = key()
  User.create({
    username: req.body.username,
    password: encryptPassword(req.body.password, newKey),
    key: newKey
  })
  .then(respon => res.send(respon))
  .catch(err => res.send(err))
}

function signin (req, res) {
  console.log(req.body.username);
  User.findOne({ username: req.body.username})
  .then(data => {
    console.log(data.password);
    console.log(encryptPassword(req.body.password, data.key));
    console.log(process.env.SECRET);
    if(data.password == encryptPassword(req.body.password, data.key)){
      var token = jwt.sign({
        _id :data._id,
        username : data.username,
        role : data.role
      },process.env.SECRET);
      res.send(token)
    }else {
      res.send('password salah')
    }
  })
  .catch(err => res.send(err))
}

module.exports = {getAllUsers, register, signin};
