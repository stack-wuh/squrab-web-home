<template>
  <section class='my-page'>
    <my-block :style="styles" currIndex="4">
      <section class="my-wrap">
        <h3 class="my-wrap__title">携手方兔 嗅探新的城市气息</h3>
        <h5 class="my-wrap__sub">对未来探索是方兔的企业基因，同城无人物流等领域是方兔的未来方</h5>
      </section>
    </my-block>
  </section>
</template>

<script>
 import MyBlock from '@/components/schema/block'
 export default{
  name: 'Future',
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
@include b(page) {
  background-image: url(../../../assets/imgs/index/bg_future.png);
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
  font-weight: 600;
  color: #003E6E;
  user-select: none;

  @include e(title) {
    font-size: 40px;
    line-height: 2em;
  }
  @include e(sub) {
    font-size: 20px;
  }
}
</style>