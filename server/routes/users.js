var express = require('express');
var router = express.Router();
var User = require('../controllers/users')
var Auth = require('../helpers/auth')

/* GET home page. */
router.get('/', Auth.authentikasi, User.getAllUsers)
router.post('/register', User.register);
router.post('/signin' , User.signin)

module.exports = router;
