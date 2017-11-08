<template>
<div>
  <div id="header">
    <div class="wrap">
      <span><router-link to="/login">注册</router-link></span>
    </div>
  </div>
  <div id="content">
    <div class="wrap">
      <form action="post">
      <input type="text" name="username" placeholder="手机号/邮箱/用户名" v-model="username">
      <input type="text" name="password"  placeholder="输入密码" v-model="password">
       <input type="button" value="登陆" @click="checkInfo">
      </form>
    </div>
    <div id="third">
      <p>合作网站登陆</p>
      <a href="http://www.qq.com/"><img src="../../assets/login_ico2.png" alt=""></a>
      <a href="https://www.alipay.com/"><img src="../../assets/login_ico4.png" alt=""></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            isLogin:false,
            userInfo:[
              {username:'aaa',password:'123'},
              {username:'bbb',password:'bbb'},
              {username:'ccc',password:'123'}
            ]
        }
    },
  methods:{
      checkInfo(){
          var username = this.username
          var password = this.password
          var UserInfo = this.userInfo


   /*      for(var i=0;i<UserInfo.length;i++){
/!*           if(username!==UserInfo[i].name){
             alert('用户名错误')
             this.$router.push({path:'/login'})
           }
           else if(password!==UserInfo[i].password){
             alert('密码错误')
             this.$router.push({path:'/login'})
           }
           else*!/ if(username===UserInfo[i].username){
               if(password===UserInfo[i].password){
                 alert('登陆成功')
                 this.$router.push('/goods')
                 window.location.reload()
                 localStorage.setItem("username",username)
                 return
               }
           }
           else if(username!==UserInfo[i].username){
               alert("注册后才能登陆哦")
           }
         }*/
          let user = UserInfo.find((el)=> {
            if(el.username===username){
                return el
            }
          })
            if(!user){
                  alert("注册后才能登陆哦")
                 window.location.reload()
            }
          else if(user.username===username){
              if(user.password===password){
                alert('登陆成功')
                this.$router.push('/goods')
                window.location.reload()
                localStorage.setItem("username",user.username)
                return
              }
              else{
                alert("密码错误")
              }
          }
      }
  }
}
</script>

<style lang="stylus">
  $rem=(750/16)rem

#header
  width 100%
  height (400/$rem)
  .wrap
    width 100%
    height 100%
    background url("../../assets/background.jpg") no-repeat
    background-size 100% 100%
    span
      position fixed
      top 0
      right 0
      a
        text-decoration none
        color white
        font-weight bold
        font-size (36/$rem)
#content
  width 100%
  height 100%
  .wrap
      form
        input
          display block
          width 100%
          border-style none
          margin (32/$rem) auto
          width 70%
          height (80/$rem)
          border-bottom 1px solid #333
      input[type='button']
        border-style none
        background lightblue
        display block
        width 70%
        height (70/$rem)
        margin 0 auto
        color white
        font-weight 300
  #third
    margin-top (90/$rem)
    p
      text-align center
      font-size (32/$rem)
    a
      float left
      margin (60/$rem) (60/$rem)

</style>
