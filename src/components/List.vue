<template>
  <div class="itemList">
    <ul>
      <li v-for="(item,index) in pageLists"
          :key="index"
          class="clearfix">
         <div class="time">{{item.time}}</div>
         <div class="noteCont">
           <p class="title">
            <span class="noteTitle">{{item.title}}</span>
           <!--  <span class="detail">查看详情</span> -->
            <!-- <button v-on:click='pageLists.splice(index, 1)'>删除</button> -->
            <!-- <span class="delete" @click="del()">删除笔记</span> --> 
          </p>
           <p class="cont">{{item.content}}</p>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: "List.vue",
        store,
        data(){
          return{
            currtentItem:''
          }
        },
        computed: {
          pageLists(){
            return store.state.lists
            
          }
        },
        methods: {
          del() {
            // currtentItem:event.currentTarget.getAttributeNode("li")
            // currtentItem:this.parent('li')
            // console.log(currtentItem)
            // localStorage.removeItem()
            /*if(confirm("确定删除吗？") == true){
              
            }*/
            // localStorage.clear();
          }
        }
    }
</script>

<style scoped>

</style>
