<template>
  <div class="">
    <Navbar></Navbar>
    <button type="button" name="button"></button>
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
