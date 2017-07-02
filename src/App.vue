<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
       <!--导航-->
   
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from './components/leftNav'
export default {
  name: 'app',
  components: {
    leftNav
  }
}
</script>

<style>
.main {
  width: 100%;
}
</style>
