<template>
  <div>
    <div class="content-wrapper">
      <div class="avatar-box">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="info-box">
        <div class="title">
          <span class="icon-brand"></span>
          <span class="seller-name">{{seller.name}}</span>
        </div>
        <div class="desc">
          <span>{{seller.description}}</span>/<span>{{seller.deliveryTime}}分送达</span>
        </div>
      </div>
      <div class="special-count">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      // asdjaslkdjal
    }
  },
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
.content-wrapper
  padding: 24px 12px 18px 24px
  color: #ffffff
  background-color #000
  font-size: 0px
  .avatar-box
    display: inline-block
    vertical-align: top
    img
      border-radius: 2px
  .info-box
    display: inline-block
    .title
      .icon-brand
        display: inline-block
        vertical-align: top
        width: 30px
        height: 18px
      .seller-name{
        font-size: 16px
        font-weight: bold
        line-height: 18px
      }
    .desc
      font-size: 12px
</style>
