<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import goods from './components/goods/goods.vue'
import cloth from './components/cloth/cloth.vue'
import failed from './components/failed/failed.vue'
import login from './components/login/login.vue'
export default {
//  name: 'app',
  components: {
      goods,
      cloth,
      failed,
      login,
  }
}
</script>

<style>

</style>
