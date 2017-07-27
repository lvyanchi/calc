<template>
  <div>
  <header class="head">
      <div class="main">
        <a-nav></a-nav>
      </div>
  </header>

  </div>
</template>
<script>
  import Nav from './Nav'

  export default {
    name:'head',
    components:{
      'a-nav':Nav

    }

  }
</script>

<style scoped>
header{
  width: 100%;
  height: 60px;
  padding: 15px 0;
  background:linear-gradient(to top, rgba(36, 121, 76, 0.8) 0%, rgba(82, 121, 9, 0.7) 100% );
  border-bottom:1px solid #b5d592;
}


</style>
