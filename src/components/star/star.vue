<template>
  <div class="star-wrapper" :class="size">
    <span v-for="(item, index) in itemClassArray" :key="index" class="star-item" :class="item"></span>
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: {
    size: {
      type: String,
      default() {
        return 'normal'
      }
    },
    score: {
      type: Number,
      default() {
        return 3.6
      }
    }
  },
  data() {
    return {
      itemClassArray: [],
      totalScore: 5,
      starNumber: 5
    }
  },
  created() {
    let allItemNumber = Math.floor(this.score / 1)
    let tempFlag = this.score % 1 >= 0.5
    for (let i = 0; i < this.starNumber; i++) {
      if (i < allItemNumber) {
        this.itemClassArray.push('star-all')
      } else if (i === allItemNumber && tempFlag) {
        this.itemClassArray.push('star-half')
      } else {
        this.itemClassArray.push('')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~common/scss/mixin.scss';
.star-wrapper {
  display: inline-block;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
  }
  &.normal {
    & > span {
      margin-right: 6px;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .star-item {
      width: 18px;
      height: 18px;
      background-size: 18px 18px;

      @include bg-image('./star36_off');
      &.star-all {
        @include bg-image('./star36_on');
      }
      &.star-half {
        @include bg-image('./star36_half');
      }
    }
  }
  &.small {
    & > span {
      margin-right: 3px;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .star-item {
      width: 12px;
      height: 12px;
      background-size: 12px 12px;
      @include bg-image('./star24_off');
      &.star-all {
        @include bg-image('./star24_on');
      }
      &.star-half {
        @include bg-image('./star24_half');
      }
    }
  }
  &.large {
    & > span {
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .star-item {
      width: 24px;
      height: 24px;
      background-size: 24px 24px;
      @include bg-image('./star48_off');
      &.star-all {
        @include bg-image('./star48_on');
      }
      &.star-half {
        @include bg-image('./star48_half');
      }
    }
  }
}
</style>
