<template>
  <div class="addNote">
    <div class="title">新增个人笔记</div>
    <div class="addTitle">
    <!-- <span>标题:</span> -->
    <input type="text" v-model="title" placeholder="标题">
    </div>
    <div class="addCont">
    <!-- <span>内容:</span> -->
    <textarea rows="12" cols="90" v-model="content" placeholder="内容"></textarea>
    
    </div>
    <div class="btn">
        <button type="button" @click="add()">添加</button>
        <button type="button" @click="cancel()">取消</button>
    </div>
  </div>
</template>

<script>
    import store from '@/store'
    
    export default {
        name: "Add.vue",
        store,
        data(){
          return {
            title: '',
            content: '',
            time:''
          }
        },
        methods: {
          add() {
            store.commit('addItem',{
              title:this.title,
              content:this.content,
              time:new Date().toLocaleDateString()
            })
            this.title=''
            this.content=''
            this.$router.push('/home/list')
          },
          cancel() {
            this.$router.push('/home/user')
          }
      }
    }
</script>

<style scoped>

</style>
