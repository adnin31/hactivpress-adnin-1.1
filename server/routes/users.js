var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/register', (req, res) => res.send('ini resgiter'));
router.post('/signin' , (req, res) => res.send('ini signin'))

module.exports = router;
