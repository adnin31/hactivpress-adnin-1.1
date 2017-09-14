var express = require('express');
var router = express.Router();
var Articles = require('../controllers/articles')

/* GET users listing. */
router.get('/', Articles.getAllArticles);
router.get('/:id', Articles.getOneArticles);
router.post('/', Articles.insertArticle);
router.put('/:id', Articles.updateArticle);
router.delete('/:id', Articles.deleteArticle);
router.get('/author/:author', Articles.getByAuthor);
router.get('/category/:category', Articles.getByCategory);


module.exports = router;
