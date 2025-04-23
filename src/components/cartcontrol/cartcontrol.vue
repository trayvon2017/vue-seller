<template>
  <div class="cart-control-container">
    <transition name="scroll">
      <div v-show="food.count" @click="deleteFromCart($event)" class="decrease-icon">
        <i class="icon-remove_circle_outline"></i>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="food.count" class="num">{{showCount}}</div>
    </transition>
    <div class="add-icon" @click="addToCart($event)">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'CartControl',
  props: {
    food: {
      type: Object,
      default() {
        return {
          count: 0
        }
      }
    },
    foods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    showCount() {
      return this.food.count
    }
  },
  data() {
    return {
      count: this.food.count ? this.food.count : 0
    }
  },
  methods: {
    addToCart(evt) {
      if (!evt._constructed) {
        return
      }
      this.count++
      Vue.set(this.food, 'count', this.count)
      this.$emit('onAddToCart', evt)
    },
    deleteFromCart(evt) {
      if (!evt._constructed) {
        return
      }
      if (--this.count < 0) {
        this.count = 0
      }
      Vue.set(this.food, 'count', this.count)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-control-container {
  font-size: 0;
  .num {
    display: inline-block;
    margin-top: 10px;
    width: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .decrease-icon,
  .add-icon {
    display: inline-block;
    padding: 4px;
    vertical-align: top;
  }
  .icon-remove_circle_outline,
  .icon-add_circle {
    display: inline-block;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }
}

// 动画
.scroll-enter-active,
.scroll-leave-active {
  transition: all 0.4s;
  .icon-remove_circle_outline {
    transition: all 0.4s;
  }
}

.scroll-enter,
.scroll-leave-to {
  transform: translate3d(56px, 0, 0);
  .icon-remove_circle_outline {
    opacity: 0;
    transform: rotate(180deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
