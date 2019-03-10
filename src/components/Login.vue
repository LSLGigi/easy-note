<template>
  <div>
    <form action="" v-if="!isReg" class="form">
      <div class="title">Welcome</div>
      <div class="inputInfo">
      <span>用户名：</span>
      <input type="text" v-model="name">
      </div>
      <div class="inputInfo">
      <span>密码：</span>
      <input type="password" v-model="password">
      </div>
      <div class="btn">
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form action="" v-else  class="form">
      <div class="title">Welcome</div>
      <div class="inputInfo">
      <span>用户名：</span>
      <input type="text" v-model="name">
      </div>
      <div class="inputInfo">
      <span>密码：</span>
      <input type="password" v-model="password">
      </div>
      <div class="inputInfo">
      <span class="textInfo">确认密码：</span>
      <input type="password" v-model="repeat">
      </div>
      <div class="btn">
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Login.vue",
        data(){
          return{
            isReg: false,
            name:'',
            password:'',
            repeat:''
          }
        },
        methods:{
          login(){
            if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password){
              this.name=''
              this.password=''
              this.$router.push('/home/list')
            } else{
              alert("用户名密码错误")
            }

          },
          reg(){
            this.isReg=true
          },
          cancel(){
            this.isReg=false
          },
          addUser(){
            if(this.password === this.repeat){
              localStorage.setItem("name",this.name)
              localStorage.setItem("password",this.password)
              this.name=''
              this.password=''
              this.isReg=false
            }else{
              alert("两次密码不一致")
            }
          }
        }
    }
</script>

<style scoped>

</style>
