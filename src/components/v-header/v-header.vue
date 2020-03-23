<template>
  <div class="header">
    <div class="bg-wrapper">
      <img :src="seller.avatar" alt="" />
    </div>
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt />
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
          <ico type="decrease_1"></ico>
          <span class="support-desc">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="sales">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Ico from 'components/ico/ico'
export default {
  name: 'VHeader',
  components: {
    Ico
  },
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
@import '~common/scss/mixin.scss';
.header {
  position: relative;
  background-color: rgba(7, 17, 27, 0.5);
  .content-wrapper {
    position: relative;
    padding: 24px 0 18px 24px;
    color: white;
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
      vertical-align: top;
      margin-left: 16px;
      // height: 100%;
      .title {
        margin-top: 2px;
        font-size: 16px;
        font-weight: bold;
        & > span {
          vertical-align: middle;
        }
        .brand {
          display: inline-block;
          width: 30px;
          height: 18px;
          background-size: 30px 18px;
          background-repeat: no-repeat;
          background-position: center;
          @include bg-image('./brand');
        }
      }
      .desc {
        margin: 8px 0 10px 0;
        font-size: 12px;
      }
      .supports {
        margin-bottom: 2px;
        font-size: 10px;
        .support-desc {
          vertical-align: middle;
        }
      }
    }
    .sales {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      .count {
        vertical-align: top;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: 10px;
      }
    }
  }
  .bg-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    font-size: 0;
    filter: blur(10px);
  }
}
</style>
