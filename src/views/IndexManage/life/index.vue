<template>
  <section class='my-page'>
    <my-block :style="styles" currIndex="3">
      <section class="my-wrap">
        <div class="img-wrap">
          <img src="../../../assets/imgs/index/icon_text.png" alt="icon_text">
        </div>
        <p class="my-wrap__link">
          <a href="https://www.zhuansong.pro" target="_blank">查看专送Pro官网</a>
          <img src="../../../assets/imgs/index/icon_play.png" alt="icon_play">
        </p>
      </section>
    </my-block>
  </section>
</template>

<script>
 import MyBlock from '@/components/schema/block'
 export default{
  name: 'Lift',
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
        height: '100vh'
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
  background-image: url(../../../assets/imgs/index/bg_lift.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
  background-position: center center;
}
@include b(wrap) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #fff;

  .img-wrap {
    & > img {
      width: auto;
      max-width: 100%;
    }
  }

  @include e(link) {
    position: relative;
    height: 30px;
    margin-top: 20px;
    font-size: 30px;
    line-height: 1;
    text-align: center;
    & > a {
      padding-right: 10px;
      color: #fff !important;
      text-decoration: underline;
      user-select: none;
      &:hover {
        cursor: pointer;
      }
      &:active {
        color: #ccc;
      }
    }
    & img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>