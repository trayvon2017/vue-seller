<template>
  <div class="goods-wrapper">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li
          class="menu-item border-1px"
          v-for="(goodCat, i) in goods"
          :key="i"
          :class="{active: i===1}"
        >
          <span class="text-wrapper">
            <ico v-if="goodCat.type >=0" :type="`${supportsList[goodCat.type]}_2`"></ico>
            <span class="cat-name">{{goodCat.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-wrapper"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Ico from '../ico/ico.vue'
export default {
  name: 'Goods',
  components: {
    Ico
  },
  data() {
    return {
      goods: [],
      supportsList: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  },
  created() {
    axios
      .get('/api/goods')
      .then(response => {
        if (response.data.errno === 0) {
          this.goods = response.data.data
          console.log(this.goods)
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin.scss';
.goods-wrapper {
  display: flex;
  height: calc(100% - 184px);
  .menu-wrapper {
    flex: 0 0 80px;
    background-color: #f3f5f7;

    .menu-item {
      display: table;
      padding: 0 10px;
      height: 54px;
      line-height: 14px;
      font-size: 12px;
      color: #07111b;
      width: 100%;
      @include border-1px(#07111b);
      &:last-child {
        &:after {
          display: none;
        }
      }
      &:after {
        width: 60px;
        left: 50%;
        transform: translateX(-50%);
      }
      &.active {
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
        &:after {
          display: none;
        }
      }
      .text-wrapper {
        display: table-cell;
        vertical-align: middle;
        font-size: 0;
        .ico {
          vertical-align: top;
          margin-right: 2px;
          margin-top: 1px;
        }
        .cat-name {
          font-size: 12px;
        }
      }
    }
  }
  .goods-wrapper {
    flex: 1;
  }
}
</style>
