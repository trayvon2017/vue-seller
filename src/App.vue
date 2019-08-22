<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import VHeader from './components/header/v-header'
export default {
  name: 'App',
  components: {
    VHeader
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$axios.get('getSeller')
      .then(data => {
        console.log(data)
        if (data.data.errno === 0) {
          this.seller = data.data.seller
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl';
#app
  .tab
    display flex
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,.1))
    // border 1px solid rgba(7,17,27,.1)
    .tab-item
      flex 1
      text-align center
      a
        font-size 14px
        color rgb(77,85,93)
        &.active
          color rgb(220,20,20)
</style>
