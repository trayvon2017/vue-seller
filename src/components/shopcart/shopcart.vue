<template>
  <div class="shopcart-container" :class="{active: amount}">
    <div class="shopcart-left">
      <div class="shopcart-icon-wrapper">
        <div class="shopcart-icon">
          <i class="icon-shopping_cart"></i>
        </div>
        <span v-show="count" class="foods-count">{{count}}</span>
        <transition-group
          name="list"
          tag="p"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
        >
          <span v-for="(item, i) in ballCount" v-bind:key="item" class="ball" :data-index="i">
            <span class="inner"></span>
          </span>
        </transition-group>
        <!-- <transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
        <span class="ball"></span>
        </transition>-->
      </div>
      <div class="shopcart-amount">&yen;{{amount}}</div>
      <div class="shopcart-desc">配送费{{seller.deliveryPrice}}元</div>
    </div>

    <div class="shopcart-right" :class="{active: available}">{{shopcartDesc}}</div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  data() {
    return {
      available: false,
      ballCount: 0,
      balls: []
    }
  },
  props: {
    selectedFoods: {
      type: Array,
      default() {
        return []
      }
    },
    seller: {
      type: Object,
      default() {
        return {
          deliveryPrice: 0,
          minPrice: 0
        }
      }
    }
  },
  watch: {
    shopcartDesc(value) {
      if (value === '去结算') {
        this.available = true
      }
    }
  },
  computed: {
    amount() {
      let amount = 0
      this.selectedFoods.forEach(food => {
        amount += (food.count ? food.count : 0) * food.price
      })
      return amount
    },
    count() {
      let amount = 0
      this.selectedFoods.forEach(food => {
        amount += food.count ? food.count : 0
      })
      return amount
    },
    shopcartDesc() {
      let desc = ''
      if (!this.amount) {
        desc = `¥${this.seller.minPrice}起送`
      } else if (this.amount < this.seller.minPrice) {
        desc = `还差¥${this.seller.minPrice - this.amount}起送`
      } else {
        desc = '去结算'
      }
      return desc
    }
  },
  methods: {
    onAddToCartClicked(target) {
      console.log(target)
      this.ballCount++
      let rect = target.getBoundingClientRect()
      this.balls.push(rect)
      console.log(target.getBoundingClientRect())
    },
    beforeEnter(el) {
      // x 40 y 19
      console.log(el)
      let index = +el.getAttribute('data-index')
      let rect = this.balls[index]
      let y = -(window.innerHeight - rect.y - 30)
      let x = rect.x - 40
      el.style.transform = `translate3d(0,${y}px,0)`
      let inner = el.getElementsByClassName('inner')[0]
      inner.style.webkitTransform = `translate3d(${x}px,0,0)`
      inner.style.transform = `translate3d(${x}px,0,0)`
      inner.style.opacity = 1
      el.style.display = 'inline-block'
    },
    enter(el, done) {
      console.log(el)
      let rf = el.offsetHeight
      el.style.transform = 'translate3d(-50%,-50%,0)'
      let inner = el.getElementsByClassName('inner')[0]
      inner.style.webkitTransform = `translate3d(0,0,0)`
      inner.style.transform = `translate3d(0,0,0)`
      inner.style.opacity = 0
      //   el.style.display = 'none'
      done()
    },
    afterEnter(el) {
      this.ballCount--
      this.balls.shift()
      console.log(el)
    }
  }
}
</script>

<style lang="scss" scoped>
.shopcart-container {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: #141d27;
  color: rgba(255, 255, 255, 0.4);
  z-index: 10;
  &.active {
    .shopcart-icon {
      background-color: #00a0dc;
      .icon-shopping_cart {
        color: #fff;
      }
    }
    .shopcart-amount {
      color: #fff;
    }
  }
  .shopcart-left {
    flex: 1;
    font-size: 0;
    .shopcart-icon-wrapper {
      display: inline-block;
      position: relative;
      top: -10px;
      margin: 0 12px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #141d27;
      .shopcart-icon {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #333;
        text-align: center;
        .icon-shopping_cart {
          line-height: 44px;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.4);
        }
      }
      .foods-count {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        padding: 2px 6px;
        color: #fff;
        background-color: #f01414;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.4);
        border-radius: 16px;
      }
      .ball {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        display: none;
        .inner {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: red;
          transition: all 0.4s linear;
        }
      }
    }
    .shopcart-amount {
      display: inline-block;
      margin: 12px 0;
      padding-right: 12px;
      line-height: 24px;
      vertical-align: top;
      font-size: 16px;
      font-weight: 700;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .shopcart-desc {
      display: inline-block;
      margin-top: 18px;
      padding-left: 12px;
      vertical-align: top;
      font-size: 12px;
    }
  }
  .shopcart-right {
    flex: 0 0 105px;
    width: 0;
    line-height: 48px;
    text-align: center;
    background-color: #2b333b;
    font-size: 12px;
    font-weight: 700;
    &.active {
      background-color: #00b43c;
      color: #fff;
    }
  }
}
</style>
