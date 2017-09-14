var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', (req, res) => res.send('register') );

module.exports = router;
