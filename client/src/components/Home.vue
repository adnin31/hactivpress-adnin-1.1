<template>
  <div class="">
    <Navbar></Navbar>
    <div class="container" style="margin-bottom: 30px">
      <router-link class = "btn btn-primary" type="button" name="button" :to="'/addarticles'">Add Articles</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="css">
</style>
