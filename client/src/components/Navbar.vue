<template lang="html">
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">HactivPress</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Category <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li v-for="article in allArticle">
              <router-link :to="'/category/'+ article.category" @click.native="getCategory(article.category)">{{article.category}}</router-link>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Author <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li v-for="article in allArticle">
              <router-link :to="'/author/'+ article.author" @click.native="getAuthor(article.author)">{{article.author}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  computed: {
    allArticle () {
      return this.$store.state.allArticle
    }
  },
  methods: {
    ...mapActions([
      'getCategory',
      'getAuthor'
    ])
  }
}
</script>

<style lang="css">
</style>
