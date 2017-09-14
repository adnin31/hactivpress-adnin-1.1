var express = require('express');
var router = express.Router();
var User = require('../controllers/users')

/* GET home page. */
router.get('/', User.getAllUsers)
router.post('/register', User.register);
router.post('/signin' , (req, res) => res.send('ini signin'))

module.exports = router;
