<template>
  <div>
    <router-view/>
    <!-- <div class="top"></div> -->
    <div class="header">
      <div class="left">Easy Note</div>
      <ul class="right">
        <li><router-link :to="{name: 'list'}">笔记列表</router-link></li>
        <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home.vue"
    }
</script>

<style scoped lang="scss">

</style>
