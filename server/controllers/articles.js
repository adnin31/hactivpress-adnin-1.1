var Articles = require('../models/articles')

function getAllArticles (req, res) {
  Articles.find()
  .then(data => res.send(data))
  .catch(err => res.send(err))
}

function insertArticle (req, res) {
  Articles.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(res => res.send('data masuk',res))
  .catch(err => res.send(err))
}

function updateArticle (req,res) {
  Articles.update({
    _id: req.params.id
  }, {
    $set: {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    }
  })
  .then(respon => res.send(respon))
  .catch(err => res.send(err))
}
function deleteArticle (req,res) {
  Articles.remove({
    _id: req.params.id
  })
  .then(res => res.send('deleted',res))
  .catch(err => res.send('enngak ke delete',err))
}
function getByAuthor(req, res) {
  Articles.find({author: req.params.author})
  .then(data => res.send(data))
  .catch(err => res.send(err))
}
function getByCategory(req, res) {
  Articles.find({category: req.params.category})
  .then(data => res.send(data))
  .catch(err => res.send(err))
}
function getOneArticles (req, res) {
  req.params
  Articles.findOne({_id: req.params.id})
  .then(data => res.send(data))
  .catch(err => res.send(err))
}
module.exports = {getAllArticles, insertArticle, updateArticle, deleteArticle, getByAuthor ,getByCategory, getOneArticles};
