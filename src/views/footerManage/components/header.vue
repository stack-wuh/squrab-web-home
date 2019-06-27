<template>
  <section class='my-page'>
    <section class="cm-wrapper">
      <section class="cm-wrapper-lf">
        <div class="img-box">
          <img :src="LogoImg" alt="logo">
        </div>
      </section>
      <section class="cm-wrapper-rg">
        <ul class="my-nav-list">
          <li 
            v-for="(item, index) in List"
            :key="index"
            :class="[
              {'is-link-active': item.reg.test($route.path)},
              'my-nav-list__item'
            ]">
            <span @click="handleJump(index)">{{item.label}}</span>  
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
 const LogoImg = require('@/assets/imgs/logo.png')
 const List = [
   {
     label: '新闻中心',
     reg: /^\/?footer\/?news$/
   },
   {
     label: '工作机会',
     reg: /^\/footer\/(port\/?(school|social)?)?$/
   },
   {
     label: '隐私政策',
     reg: /^\/footer\/?self$/
   },
   {
     label: '法律公告',
     reg: /^\/footer\/?law$/
   }
 ]
 export default{
  name: 'FHeader',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      LogoImg,
      List
    }
  },
  methods: {
    handleJump(index){
      let routers = [
        '/footer/news',
        '/footer/port',
        '/footer/self',
        '/footer/law'
      ]
      this.$router.push({path: routers[index]})
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@include b(page) {
  background-color: rgba(255, 255, 255, .1);
  .cm-wrapper {
    @include flex($dir: row, $align: strech, $justify: space-between, $wrap: nowrap);
    width: 1200px;
    height: 180px;
    margin: 0 auto;
    &-lf {
      @include flex($justify: center);
      width: 40%;

      .img-box {
        width: 256px;
        height: 80px;
        & > img {
          width: auto;
          max-width: 100%;
        }
      }
    }
    &-rg {
      width: 60%;
      font-size: 24px;
      color: #fff;

      @include b(nav-list) {
        position: relative;
        top: 50%;
        height: 80px;
        transform: translateY(-50%);
        @include flex($dir: row, $align: center, $justify: space-between);
        @include e(item) {
          position: relative;
          width: 20%;
          text-align: center;
          
          &::before {
            position: absolute;
            top: -1em;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: #fff;
          }
          &:hover {
            cursor: pointer;
            &::before {
              width: 24px;
              height: 24px;
              top: -28px;
              background-color: #fff;
              transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
          }
        }

        &::before {
          position: absolute;
          top: 8px;
          left: 0;
          content: '';
          display: inline-block;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, rgba(255, 255, 255, .3), rgba(255, 255, 255, 1), rgba(255, 255, 255, .3))
        }
      }
    }
  }
}
@include when(link-active) {
  &::before {
    position: absolute;
    top: -28px !important;
    display: inline-block;
    width: 24px !important;
    height: 24px !important;
  }
}
.js-auto-fixed{
  position: fixed;
  left: 0;
  right: 0;
  transform: translateY(-10px);
  height: 170px;
  box-shadow: 0 10px 10px 0 #ccc;
  background-color: rgba(0, 0, 0, .8);
  background-image: url(../../../assets/imgs/footer/bg_fixed.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 10000 !important;
}
.fade-in {
  animation: fade  .8s forwards linear;
}

@keyframes fade{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>