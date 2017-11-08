<template>
<div>
  <div id="header">
    <div class="title">
      <span><router-link to="/goods"></router-link></span>
      <span>提示信息</span>
      <span></span>
    </div>
  </div>
  <div id="content">
    <div id="wrap">
      <img src="../../assets/warning.png" alt="">
      <p>登陆以后才能操作哦!</p>
      <p>如果没有自动跳转,请手动点击!</p>
      <button><router-link to="/login">立即跳转</router-link></button>
    </div>
  </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus">
  $rem=(750/16)rem

  #header
    position fixed
    left 0
    top 0
    background #fff
    width 100%
    height (100/$rem)
    text-align center
    line-height (100/$rem)
    .title
      position relative
      width 100%
      height 100%
      span
        display inline-block
        text-align center
        height 100%
        &:nth-child(1)
          background url("../../assets/left_arrow.jpg") no-repeat
          background-size 100% 100%
          width 12%
          position absolute
          left 0
          top 0
        &:nth-child(2)
          font-size 18px
          width 20%
          position absolute
          top 0
          left 40%
  #content
    background #eee
    height (130000/$rem)
    #wrap
      padding 30% 22%
      img
        margin 0 auto
        display block
        text-align center
      p
        width 100%
        text-align center
        font-size 16px
        margin 5%
        white-space nowrap
        &:nth-of-type(2)
          color #666
      button
        margin 0 auto
        border-style none
        border 1px solid lightblue
        background whitesmoke
        display block
        width (180/$rem)
        height (90/$rem)
        a
          color #666
</style>
