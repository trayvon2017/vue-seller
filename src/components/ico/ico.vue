<template>
  <span class="ico" :class="iconClass"></span>
</template>

<script>
export default {
  name: 'Ico',
  props: {
    size: {
      type: String,
      default() {
        return 'small'
      }
    },
    type: {
      type: String,
      default() {
        return 'decrease_1'
      }
    }
  },
  computed: {
    iconClass() {
      return `ico-${this.type} ico-${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~common/scss/mixin.scss';
.ico {
  display: inline-block;
  vertical-align: middle;
  &.ico-small {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    &.ico-decrease_1 {
      @include bg-image('decrease_1');
    }
    &.ico-decrease_2 {
      @include bg-image('decrease_3');
    }
    &.ico-discount_1 {
      @include bg-image('discount_1');
    }
    &.ico-discount_2 {
      @include bg-image('discount_3');
    }
    &.ico-guarantee_1 {
      @include bg-image('guarantee_1');
    }
    &.ico-guarantee_2 {
      @include bg-image('guarantee_3');
    }
    &.ico-invoice_1 {
      @include bg-image('invoice_1');
    }
    &.ico-invoice_2 {
      @include bg-image('invoice_3');
    }
    &.ico-special_1 {
      @include bg-image('special_1');
    }
    &.ico-special_2 {
      @include bg-image('special_3');
    }
  }
  &.ico-large {
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    &.ico-decrease_1 {
      @include bg-image('decrease_2');
    }
    &.ico-decrease_2 {
      @include bg-image('decrease_4');
    }
    &.ico-discount_1 {
      @include bg-image('discount_2');
    }
    &.ico-discount_2 {
      @include bg-image('discount_4');
    }
    &.ico-guarantee_1 {
      @include bg-image('guarantee_2');
    }
    &.ico-guarantee_1 {
      @include bg-image('guarantee_4');
    }
    &.ico-invoice_1 {
      @include bg-image('invoice_2');
    }
    &.ico-invoice_2 {
      @include bg-image('invoice_4');
    }
    &.ico-special_1 {
      @include bg-image('special_2');
    }
    &.ico-special_2 {
      @include bg-image('special_4');
    }
  }
}
</style>
