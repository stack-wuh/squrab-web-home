<template>
  <section class='my-page'>
    <my-block :style="styles" currIndex="5">
      <section class="my-wrap">
        <p class="my-wrap__title">SquRab Network</p>
        <p class="my-wrap__sub">勇敢 真实 热爱</p>
      </section>
    </my-block>
  </section>
</template>

<script>
 import MyBlock from '@/components/schema/block'
 export default{
  name: 'Join',
  components: {
    MyBlock
  },
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      styles: {
        position: 'relative',
        height: '100vh',
      }
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/animate.scss';
@include b(page) {
  background-image: url(../../../assets/imgs/index/bg_join.png);
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  // background-attachment: fixed;
}
@include b(wrap) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #fff;
  text-align: center;

  @include e(title) {
    font-size: 80px;
    line-height: 1.5;
  }
  @include e(sub) {
    font-size: 40px;
    line-height: 1.5;
  }
}
</style>