<template lang="html">
  <div class="container">
    <div class="col-md-8" v-for="article in allCategory">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">{{article.title}}</h3>
        </div>
        <div class="panel-body">
          {{article.content}}
        </div>
        <div class="panel-footer">
          <p><span class="glyphicon glyphicon-user" style="margin-right: 10px"></span>author: {{article.author}}</p>
          <p><span class="glyphicon glyphicon-text-background" style="margin-right: 10px"></span>category: {{article.category}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allCategory () {
      return this.$store.state.allCategory
    }
  }
}
</script>

<style lang="css">
</style>
