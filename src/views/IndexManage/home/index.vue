<template>
  <section class='my-page'>
    <my-elem-block :styles="styles" currIndex="1">
      <section class="my-wrap">
        <h1 class="my-wrap__title js-trans_lf">Live for More</h1>
        <p  @click="handleAutoPlay" class="my-wrap__list js-fade_top">
          <span class="my-icon-arrow-bottom my-wrap__list--arrow my-wrap__list--arrow-1"></span>
          <span class="my-icon-arrow-bottom my-wrap__list--arrow my-wrap__list--arrow-2"></span>
          <span class="my-icon-arrow-bottom my-wrap__list--arrow my-wrap__list--arrow-3"></span>
        </p>
      </section>
    </my-elem-block>
  </section>
</template>

<script>
 import MyElemBlock from '@/components/schema/block'
 export default{
  name: 'Home',
  components: {
    MyElemBlock
  },
  props: {},
  watch: {},
  inject: ['Home'],
  computed: {},
  data(){
    return {
      styles: {
        position: 'relative',
        height: '100vh',
      }
    }
  },
  methods: {
    handleAutoPlay(){
      this.Home.scroller.autoPlay({index: 1, duration: 4000})
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/animate.scss';

@include b(page) {
  background-image: url(../../../assets/imgs/index/bg_home.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
  background-position: center center;
}
@include b(wrap) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;

  @include e(title) {
    opacity: 0;
    text-align: center;
    font-size: 7.5rem;
    color: #fff;
    word-break: keep-all;
  }

  @include e(list) {
    opacity: 0;
    @include flex($align: center);
    width: 200px;
    margin: 0 auto;

    &:hover {
      cursor: pointer;
    }
    & > * {
      font-size: 2rem;
      color: #fff;
    }

    @each $i, $delay in (1, 1s),
                        (2, 2s),
                        (3, 3s) {
      &--arrow-#{$i} {
        @include el-move-bm($delay: $delay);
      }
    }
  }
} 
</style>