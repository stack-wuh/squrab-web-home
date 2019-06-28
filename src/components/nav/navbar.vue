<template>
  <section class='my-page'>
    <section class="my-page__list">
      <section
        v-for="(item, idx) in navs"
        :key="'n' + idx"
        class="my-page__item">
        <p class="my-page__item--tips">
          <span 
            @click="handleClick(item, idx)"
            class="tips-title" 
            :class="[{'is-tips-active': idx == lightIndex}]">{{item.title}}
          </span>
          <span class="tips-sub">{{item.sub}}</span>
        </p>
      </section>
    </section>
  </section>
</template>

<script>
 const navs = [
   {
     title: '首页',
     sub: 'HOME',
     hash: '/home#home'
   },
   {
     title: '科技',
     sub: 'TECHNOLOGY',
     hash: '/home#technology'
   },
   {
     title: '生活',
     sub: 'LIFY',
     hash: '/home#lift'
   },
   {
     title: '未来',
     sub: 'FUTURE',
     hash: '/home#future'
   },
   {
     title: '参与',
     sub: 'JOIN US',
     hash: '/home#join'
   }
 ]
 export default{
  name: 'Navbar',
  components: {},
  model: {
    prop: 'index',
    event: 'click'
  },
  props: {
    index: {
      required: true
    },
    lightIndex: {
      required: true,
      default: 0
    }
  },
  inject: ['Home'],
  watch: {},
  computed: {},
  data(){
    return {
      navs,
    }
  },
  methods: {
    handleClick(item, index){
      this.$emit('click', index)
      this.$emit('open-click', {index, item})
    },
  },
  mounted(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@include b(page){
  position: fixed;
  right: 5vw;
  top: 10vh;
  height: 80vh;
  width: 5vw;
  @include e(list) {
    @include flex($wrap: column, $justify: space-between);
    width: 6px;
    height: 100%;
    padding: 12vh 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) , rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    box-sizing: border-box;
    color: #fff;
    font-size: 15px;
  }
  @include e(item) {
    // position: relative;
    width: 110px;
    height: 60px;
    margin-left: -110px;

    @include m(tips){
      @include flex($wrap: row, $align: center, $justify: center);
      height: 100%;

      .tips-title {
        position: relative;
        width: 100%;
        height: 36px;
        text-align: center;
        line-height: 36px;
        font-size: 24px;
        &::after {
          position: absolute;
          left: 104px;
          top: 9px;
          content: '';
          display: inline-block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #fff;
        }
        &:hover {
          cursor: pointer;
          border-radius: 20px;
          background-color: rgba(0, 0, 0, .3);
          transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      }
    }
  }
  .is-tips-active {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, .3);
    animation: scale-up-hor-center .5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    &::after {
      width: 12px;
      height: 12px;
      left: 107px;
      top: 13px;
    }
  }
}

@keyframes scale-up-hor-center {
  0% {
    opacity: 0;
    transform: scaleX(.4);
    transform-origin: 0 0;
  }
  100%{
    opacity: 1;
    transform: scaleX(1);
    transform-origin: 0 0;
  }
}
</style>
