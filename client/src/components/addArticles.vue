<template>
  <div class="container">
    <form class="form-horizontal">
        <legend>Add Question</legend>
        <div class="form-group">
          <label for="inputEmail" class="col-lg-2 control-label">Title</label>
          <div class="col-lg-10">
            <input type="text" class="form-control" v-model="title" placeholder="Title Question">
          </div>
        </div>
        <div class="form-group">
          <label for="textArea" class="col-lg-2 control-label">Your Question</label>
          <div class="col-lg-10">
            <textarea class="form-control" rows="3" v-model="content"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10 col-lg-offset-2">
            <button type="reset" class="btn btn-default">Cancel</button>
            <button type="button" class="btn btn-primary" @click="addQuestion">Submit</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
