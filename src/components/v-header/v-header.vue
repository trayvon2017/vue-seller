<template>
  <div class="header">
    <div class="bg-wrapper">
      <img :src="seller.avatar" alt />
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
        <div class="desc">{{ seller.description }}/{{ seller.deliveryTime }}分送达</div>
        <div v-if="seller.supports" class="supports">
          <ico type="decrease_1"></ico>
          <span class="support-desc">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div @click="showDetail = true" v-show="seller.supports" class="sales">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div @click="showDetail = true" class="notice-wrapper">
      <span class="notice-icon"></span>
      <span class="notice-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="detail-wrapper" v-show="showDetail">
      <div class="detail-content-wrapper clearfix">
        <div class="content">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star size="large" :score="seller.score"></star>
          </div>
          <div class="sub-title">
            <div class="line"></div>
            <div class="title">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-show="seller.supports" class="supports-wrapper">
            <li v-for="(item,i) in seller.supports" :key="i" class="support-item">
              <ico size="large" :type="`${supportsList[item.type]}_1`"></ico>
              <span class="support-text">{{item.description}}</span>
            </li>
          </ul>
          <div class="sub-title">
            <div class="line"></div>
            <div class="title">商家公告</div>
            <div class="line"></div>
          </div>
          <p class="notice-content">{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="close-wrapper">
        <i @click="showDetail = false" class="icon-close"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Ico from 'components/ico/ico'
import Star from 'components/star/star'
export default {
  name: 'VHeader',
  components: {
    Ico,
    Star
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
    return {
      showDetail: false,
      supportsList: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~common/scss/const.scss';
@import '~common/scss/mixin.scss';
.header {
  position: relative;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;
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

  .notice-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.2);
    color: white;
    .notice-icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
      width: 22px;
      height: 12px;
      background-size: 22px 12px;
      background-repeat: no-repeat;
      background-position: center;
      @include bg-image('./bulletin');
    }
    .notice-text {
      vertical-align: middle;
      margin: 0 4px;
      font-size: 10px;
    }

    .icon-keyboard_arrow_right {
      position: absolute;
      top: 8px;
      right: 12px;
    }
  }

  .detail-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1;
    overflow: auto;
    color: white;
    .detail-content-wrapper {
      width: 100%;
      min-height: 100%;
      .content {
        margin-top: 64px;
        padding-bottom: 64px;
        .name {
          font-size: 16px;
          font-weight: 700;
          text-align: center;
        }
        .star-wrapper {
          margin-top: 16px;
          text-align: center;
        }
        .sub-title {
          display: flex;
          margin: 28px auto 24px auto;
          width: 80%;
          .title {
            padding: 0 12px;
            height: 14px;
            font-size: 14px;
            font-weight: 700;
            line-height: 14px;
            color: #ffffff;
          }
          .line {
            flex: 1;
            margin-bottom: 7px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
        .supports-wrapper {
          margin: 0 auto;
          padding-left: 12px;
          width: 80%;
          .support-item {
            margin-bottom: 12px;
            .support-text {
              margin-left: 6px;
              font-size: 12px;
            }
          }
        }
        .notice-content {
          margin: 0 auto;
          padding: 0 12px;
          width: 80%;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
    .close-wrapper {
      position: relative;
      height: 64px;
      margin-top: -64px;
      clear: both;
      .icon-close {
        position: absolute;
        left: 50%;
        bottom: 32px;
        transform: translateX(-50%);
        font-size: 32px;
      }
    }
  }
}
</style>
