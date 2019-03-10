<template>
  <div class="user">
    <div class="newNote"><router-link :to="{name: 'add'}">新增笔记</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "User.vue"
    }
</script>

<style scoped>

</style>
