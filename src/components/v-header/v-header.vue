<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="desc">
          {{ seller.description }}/{{ seller.deliveryTime }}分送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="support-ico"></span>
          <span class="support-desc">{{ seller.supports[0].description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VHeader',
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '~common/scss/const.scss';
.header {
  .content-wrapper {
    padding: 24px 0 18px 24px;
    background: black;
    font-size: 0;
    .avatar {
      display: inline-block;
      img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    // TODO: 头部样式
    .content {
      display: inline-block;
      margin-left: 16px;
      height: 100%;
      color: $color-white;
      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .desc {
        font-size: 12px;
      }
      .supports {
        font-size: 10px;
      }
    }
  }
}
</style>
