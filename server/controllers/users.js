var User = require('../models/users')

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
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(respon => res.send(respon))
  .catch(err => res.send(err))
}

module.exports = {getAllUsers,register};
