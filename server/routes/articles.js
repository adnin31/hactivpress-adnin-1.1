var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req,res) => res.send('articles'));
router.post('/', (req,res) => res.send('articles post'));
router.put('/:id', (req,res) => res.send('articles put'));
router.delete('/:id', (req,res) => res.send('articles delete'));


module.exports = router;
