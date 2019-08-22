<template>
  <div class="header-wrapper">
    <div class="content-wrapper">
      <div class="avatar-box">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="info-box">
        <div class="title">
          <span class="icon-brand"></span>
          <span class="seller-name">{{seller.name}}</span>
        </div>
        <div class="service-desc">
          <span>{{seller.description}}</span>/<span>{{seller.deliveryTime}}分送达</span>
        </div>
        <div v-if="seller.supports" class="support-desc">
          <span :class="['icon', getSupportTypeClass(seller.supports[0].type)]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span>{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="announce-wrapper">
      <span class="icon-announce"></span>
      <span class="text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bgc">
      <img :src="seller.avatar" alt="">
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
    getSupportTypeClass (type) {
      let classes = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      return classes[type]
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl';
.header-wrapper
  position: relative
  background: rgba(7, 17, 27, 0.5)
.content-wrapper
  position: relative
  padding: 24px 12px 18px 24px
  color: #ffffff
  font-size: 0px
  .avatar-box
    display: inline-block
    vertical-align: top
    img
      border-radius: 2px
  .info-box
    display: inline-block
    margin-left: 16px
    .title
      .icon-brand
        display: inline-block
        vertical-align: top
        width: 30px
        height: 18px
        background-size: 30px 18px
        background-repeat: no-repeat
        bg-image('brand')
      .seller-name{
        margin-left: 6px
        font-size: 16px
        font-weight: bold
        line-height: 18px
      }
    .service-desc
      margin: 8px 0 10px 0
      font-size: 12px
      line-height: 12px
    .support-desc
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_1')
        &.discount
          bg-image('discount_1')
        &.guarantee
          bg-image('guarantee_1')
        &.invoice
          bg-image('invoice_1')
        &.special
          bg-image('special_1')
      .text
        margin-left: 4px
        line-height: 12px
        font-size: 10px
  .support-count
      position: absolute
      right: 12px
      bottom: 15px
      height: 24px
      line-height: 24px
      padding: 0 8px
      text-align: center
      border-radius: 12px
      background-color: rgba(0,0,0,.2)
      span
        vertical-align: top
        font-size: 10px
      .icon-keyboard_arrow_right
        margin-left: 2px
        font-size: 10px
        line-height: 24px
.announce-wrapper
  position: relative
  height: 28px
  line-height: 28px
  overflow: hidden
  padding: 0 22px 0 12px
  background-color: rgba(7,17,27,.2)
  white-space: nowrap
  text-overflow: ellipsis
  color: #ffffff
  .icon-announce
    display: inline-block
    vertical-align: middle
    width: 24px
    height: 12px
    line-height: 28px
    background-size: 24px 12px
    background-repeat: no-repeat
    bg-image('bulletin')
  .text
    display: inline
    vertical-align: middle
    font-size: 10px
  .icon-keyboard_arrow_right
    position: absolute
    bottom: 8px
    right: 12px
    font-size: 10px
.bgc
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  z-index: -1
  filter: blur(10px)
  img
    width: 100%
    height: 100%
</style>
