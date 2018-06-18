<template>
  <div id="app">
       <router-view/>
      <homeBottom></homeBottom>
  </div>
</template>

<script>
import homeBottom from 'page/homeBottom/homeBottom'
export default {
  name: 'App',
  components:{
    homeBottom
  }
}
</script>


<style lang="scss" scoped>

</style>
