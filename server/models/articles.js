var mongoose = require('mongoose')
var Schema = mongoose.Schema

var aritcleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: String
})

var Article = mongoose.model('Article', aritcleSchema)

module.exports = Article;
