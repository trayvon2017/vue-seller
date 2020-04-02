<template>
  <div class="goods-wrapper">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li
          @click="onMenuItemClick(i, $event)"
          class="menu-item"
          v-for="(goodCat, i) in goods"
          :key="i"
          :class="{ active: i === menuItemIndex }"
        >
          <span class="text-wrapper">
            <ico
              v-if="goodCat.type >= 0"
              :type="`${supportsList[goodCat.type]}_2`"
            ></ico>
            <span class="cat-name">{{ goodCat.name }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-list-container">
      <ul class="cate-wrapper">
        <li
          v-for="(goodCat, i) in goods"
          :key="i"
          ref="foodList"
          class="goods-list-wrapper goods-list-hook"
        >
          <h1 class="title">{{ goodCat.name }}</h1>
          <ul class="goods-list">
            <li v-for="(good, i) in goodCat.foods" :key="i" class="good-item">
              <div class="good-img">
                <img :src="good.image" width="57" height="57" alt />
              </div>
              <div class="good-info">
                <h2 class="good-name">{{ good.name }}</h2>
                <h3 class="good-desc">{{ good.description }}</h3>
                <div class="sell-state">
                  <span class="sell-count">月销量{{ good.sellCount }}</span>
                  <span class="sell-rating">评价{{ good.rating }}</span>
                </div>
                <div class="price-wrapper">
                  <span class="now">
                    <span class="yen">&yen;</span>
                    <span class="num">{{ good.price }}</span>
                  </span>
                  <span class="old">
                    <span class="yen">&yen;</span>
                    <span class="num">{{ good.oldPrice }}</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from '@better-scroll/core'
import Ico from '../ico/ico.vue'
export default {
  name: 'Goods',
  components: {
    Ico
  },
  data() {
    return {
      goods: [],
      supportsList: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      heightList: [],
      menuItemIndex: 0,
      goodsScroll: null
    }
  },
  created() {
    axios
      .get('/api/goods')
      .then(response => {
        if (response.data.errno === 0) {
          this.goods = response.data.data
          this.$nextTick(() => {
            this.initScroll()
            this.calcHeightList()
          })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    initScroll() {
      const menuScroll = new BScroll('.menu-wrapper', {
        click: true
      })
      this.goodsScroll = new BScroll('.goods-list-container', {
        probeType: 3
      })
      console.log(menuScroll)
      this.goodsScroll.on('scroll', this.setMenuItemActive)
    },
    calcHeightList() {
      let eleArr = this.$refs.foodList
      let height = 0
      this.heightList.push(height)
      for (let i = 0; i < eleArr.length; i++) {
        height += eleArr[i].clientHeight
        this.heightList.push(height)
      }
    },
    setMenuItemActive(pos) {
      let y = Math.abs(pos.y)
      let previous = 0
      for (let i = 0; i < this.heightList.length; i++) {
        if (i === this.heightList.length - 1) {
          break
        }
        if (y >= this.heightList[i] && y < this.heightList[i + 1]) {
          console.log(i)
          this.menuItemIndex = i
          break
        }
      }
    },
    onMenuItemClick(i, event) {
      if (!event._constructed || i === this.menuItemIndex) return
      this.menuItemIndex = i
      this.goodsScroll.off('scroll', this.setMenuItemActive)
      this.goodsScroll.scrollToElement(this.$refs.foodList[i], 300)
      this.$nextTick(() => {
        this.goodsScroll.on('scroll', this.setMenuItemActive)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/scss/mixin.scss';
.goods-wrapper {
  display: flex;
  height: calc(100% - 174px);
  overflow: hidden;
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
      text-align: center;
      &.active {
        background: #fff;
        font-weight: 700;
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
  .goods-list-container {
    flex: 1;
    .cate-wrapper {
      .goods-list-wrapper {
        .title {
          padding-left: 10px;
          height: 26px;
          line-height: 26px;
          border-left: 2px solid #d9dde1;
          background-color: #f3f5f7;
          font-size: 12px;
          color: #93999f;
        }
        .goods-list {
          .good-item {
            display: flex;
            margin: 18px;
            &:last-child {
              margin-bottom: 0;
              padding-bottom: 18px;
            }
            .good-info {
              margin-left: 10px;
              font-size: 14px;
              color: rgb(7, 17, 27);
              .good-name {
                margin-top: 2px;
                font-size: 14px;
                color: #07111b;
              }
              .good-desc {
                margin: 8px 0;
                font-size: 10px;
                color: #93999f;
              }
              .sell-state {
                font-size: 0;
                color: #93999f;
                & > span {
                  font-size: 10px;
                  &:first-of-type {
                    margin-right: 12px;
                  }
                }
              }
              .price-wrapper {
                .now {
                  line-height: 24px;
                  color: #f01414;
                  font-size: 0px;
                  .yen {
                    font-size: 10px;
                  }
                  .num {
                    font-size: 14px;
                    font-weight: bold;
                  }
                }
                .old {
                  line-height: 24px;
                  color: rgb(147, 153, 159);
                  font-size: 0;
                  .num {
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
