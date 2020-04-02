<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tabs">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/Seller">商家</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import VHeader from 'components/v-header/v-header'
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    VHeader
  },
  created() {
    axios
      .get('/api/seller')
      .then(response => {
        if (response.data.errno === 0) {
          this.seller = response.data.data
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
@import '~common/scss/mixin.scss';
@import '~common/scss/const.scss';
#app {
  height: 100%;
}
.tabs {
  display: flex;
  height: 40px;
  line-height: 40px;
  @include border-1px($color-717271);
  .tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);
    &.active {
      color: rgb(240, 20, 20);
    }
  }
}
</style>
