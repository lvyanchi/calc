<template>
  <div id="app">
      <V-Header></V-Header>
      <router-view></router-view>
      <V-Footer></V-Footer>
  </div>
</template>

<script>

import Head from './components/public/Head'
import Footer from './components/public/Footer'

export default {
  name: 'app',
  components: {
    'V-Header': Head,
    'V-Footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
