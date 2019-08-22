<template>
  <div>
    <div class="content-wrapper">
      <div class="avatat-box">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="info-box">
        <div class="title">
          <span class="icon"></span>
          <span class="seller-nam">{{seller.name}}</span>
        </div>
        <div class="desc">
          <span>{{seller.description}}</span>/<span>{{seller.deliverytime}}分送达</span>
        </div>
      </div>
      <div class="special-count">
      </div>
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
      type: Object
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style>

</style>
