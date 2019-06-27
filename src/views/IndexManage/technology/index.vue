<template>
  <section class='my-page'>
    <my-block :style="styles" currIndex="2">
      <section class="my-wrap">
        <h3 class="my-wrap__sub">世界因遇见而伟大</h3>
        <p class="my-wrap__sub">
          <strong class="is-text-active">方兔网络</strong>
          <span>让科技遇见生活</span>
        </p>
        <p class="my-wrap__sub my-wrap__sub--white">专注同城生活, 用科技改变世界</p>
      </section>
    </my-block>
  </section>
</template>

<script>
 import MyBlock from '@/components/schema/block'
 export default{
  name: 'Technology',
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
  background-image: url(../../../assets/imgs/index/bg_technology.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto;
  background-position: center center;
}
@include b(wrap) {
  position: absolute;
  top: 25%;
  left: 15%;
  transform: translateY(-50%);
  font-size: 40px;
  font-weight: 600;
  color: #2A2130;
  user-select: none;

  @include e(sub) {
    line-height: 1.5em;
    letter-spacing: 2px;

    @include m(white) {
      font-size: .5em;
      line-height: 2em;
      font-weight: normal;
      color: #fff;
    }
  }
}

@include when(text-active) {
  padding-right: .5em;
  color: #1FA2FF;
}
</style>