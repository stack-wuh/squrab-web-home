<template>
  <section class='my-cm-footer'>
    <section class="my-ft-lf"></section>
    <section class="my-ft-wrapper">
      <section class="my-ft-wrapper__content">
        <section class="tp-wrap">
          <p class="tp-wrap__title">关于方兔</p>
          <p class="tp-wrap__list">
            <span 
              v-for="(item, index) in List"
              :key="'fl' + index"
              @click="handleJump(item)"
              class="tp-wrap__list--item is-hover-active">{{item.label}}
            </span>
          </p>
          <p class="tp-wrap__title">联络方式</p>
          <p class="tp-wrap__list">
            <span class="tp-wrap__list--item item-icon my-icon-icon_msg">service@squrab.com</span>
            <span class="tp-wrap__list--item item-icon my-icon-icon_tel">4008-588-855</span>
            <span class="tp-wrap__list--item item-icon my-icon-icon_site">武汉市武昌区绿地金融城绿地楚峰大厦</span>
          </p>
        </section>
        <section class="bm-wrap">
          <p class="bm-wrap__item">Copyright© 2018-2019 www.squrab.com All Rights Reserved</p>
          <p class="bm-wrap__item flex">
            <img class="margin-rg__10" src="../../assets/imgs/svg/icon_org.svg" alt="org">
            鄂ICP备18028038号-2</p>
          <span class="flex-empty"></span>
          <p class="bm-wrap__item flex">
            <span class="margin-rg__15">关注我们</span>
            <span class="flex margin-rg__15">
              <img src="../../assets/imgs/svg/icon_qq.svg" alt="qq">
            </span>
            <span class="flex">
              <img src="../../assets/imgs/svg/icon_wechat.svg" alt="wechat">
            </span>
          </p>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
 const List = [
   {
     label: '新闻中心',
     path: '/footer/news'
   },
   {
     label: '工作机会',
     path: '/footer/port'
   },
   {
     label: '隐私政策',
     path: '/footer/self'
   },
   {
     label: '法律公告',
     path: '/footer/law'
   }
 ]
 import ImgsPath from '@/utils/imgsPath'
 import MyBlock from '@/components/schema/block'
 export default{
  name: 'MyLayout',
  components: {
    MyBlock
  },
  data(){
    return {
      ImgsPath,
      List
    }
  },
  methods: {
    handleJump(item) {
      this.$router.push({path: item.path})
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@include b(cm-footer) {
  position: relative;
  width: 100%;
  height: 370px;
  box-sizing: border-box;
 
}
@include b(ft-lf) {
  float: left;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/imgs/index/bg_join.png);
  background-position: 100% 100%;
  background-size: auto;
  filter: blur(8px);
}
@include b(ft-wrapper) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, .5);
  @include e(content) {
    width: inherit;
    height: 100%;
    max-width: 1200px;
    padding: 42px 0;
    margin: 0 auto;
    box-sizing: border-box;
    color: #fff;
    font-size: 20px;
    .tp-wrap {
      &__title {
        position: relative;
        font-size: 21px;
        line-height: 1.5;

        &::before {
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-50%);
          content: '';
          display: inline-block;
          width: 6px;
          height: 21px;
          background-color: #1FA2FF;
        }
      }
      &__list {
        margin: 15px 0;
        &--item {
          padding-right: 50px;
          font-size: 20px;
          word-break: keep-all;
        }

        &--item:last-child{
          padding-right: 0;
        }
        .item-icon {
          &::before {
            padding-right: 15px;
            font-size: 20px;
          }
        }
      }
      &__list:last-of-type {
        margin-bottom: 34px;
      }
      .is-hover-active:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .bm-wrap {
      position: relative;
      @include flex($dir: row, $align: align, $justify: space-between);
      padding-top: 34px;
      
      &__item {
        padding-right: 20px;
      }
      &__item:last-child {
        padding-right: 0;
      }

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        content: '';
        background: linear-gradient(to right, rgba(255, 255, 255, .2), #fff, rgba(255, 255, 255, .2))
      }
    }
  }
}
.my-icon-icon_msg,
.my-icon-icon_tel,
.my-icon-icon_site {
  &::before {
    font-size: $--font-size-middle !important;
  }
}
</style>
