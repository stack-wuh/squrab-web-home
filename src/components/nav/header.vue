<template>
  <section class="wrapper header-wrapper">
    <header class="my-header-wrapper">
      <section class="my-header-wrapper__left">
        <img class="my-header-wrapper__left--logo" :src="logoImg" alt="logo">
      </section>
      <section class="my-header-wrapper__right">
        <span
          @click="handleClickJump(item, index)"
          class="my-header-wrapper__right--item"
          v-for="(item, index) in routers"
          :key="index"
          :class="[
            item.links.includes(path) ? 'is-active' : 'is-unactive',
            {'text-move-right': initAnimate}
          ]">
          {{item.label}}
        </span>
      </section>
    </header>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
const logoImg = require('@/assets/imgs/logo.png')
const TARGET_HTTP = 'http://b.squrab.com'
const routers = [
  {
    label: '首页',
    links: ['dashboard'],
    path: '/dashboard',
    isShowLinkActive: true
  },
  {
    label: '在线下单',
    links: ['index'],
    path: '/index',
    isShowLinkActive: true
  },
  {
    label: '专送员招募',
    links: ['enlist'],
    path: '/enlist',
    isShowLinkActive: true
  },
  {
    label: '关于我们',
    links: ['about', 'about/index'],
    path: '/about',
    isShowLinkActive: true
  }
]

export default {
  props: {},
  name: 'LayoutHeader',
  components: {},
  computed: {
    path(){
      return this.$route.path.replace(/^\//, '')
    }
  },
  data(){
    return {
      logoImg,
      routers,
      TARGET_HTTP,
      currLinkIndex: 0,

      initAnimate: false
    }
  },
  methods: {
    handleClickJump(item, index){
      let {label} = item
      this.currLinkIndex = index  
      this.$router.push({path: item.path})
    },
  },
  created(){
    this.initAnimate = true
  },
  mixins: []
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@import '@/assets/style/animate.scss';
.header-wrapper {
  border-bottom: 1px solid $b-base;
  @include b(header-wrapper) {
      @include flex($dir: row, $align: center, $justify: space-between);
      width: inherit;
      max-width: 1200px;
      height: 70px;
      margin: 0 auto;
      background-color: $b-wihte;
      box-sizing: border-box;

      @include e(left) {
        & > img {
          width: auto;
          max-width: 100%;
        }
      }

      @include e(right) {
        @include flex($dir: row, $align: center, $justify: flex-end);
        width: 100%;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        @include m(item) {
          position: relative;
          display: inline-block;
          width: 15%;
          font-size: 15px;
          line-height: 70px;

          &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            padding: 2px 50px;
          }
          &:hover {
            cursor: pointer;
            color: $base;
            &::after {
              bottom: -1px;
              background-color: $base;
              // transition: bottom .5s linear;
            }
          }
        }

        @include m(btn) {
          margin-left: 6%;
          padding: 4px 10px;
          word-break: keep-all;
          background-color: $base;
          color: $b-wihte;
          border-radius: 4px;
          font-size: 14px;
          &:hover {
            cursor: pointer;
            text-decoration: none;
            background-color: rgba(31,162,255, .5);
          }
        }
      }

      @include e(position) {
        display: inline-block;
        width: 120px;
        margin: 0 30px;
        color: #838383;
        user-select: none;

        &::before {
          padding-right: 5px;
        }
        &:hover {
          cursor: pointer;
        }
      }
  }
}
@include when(active) {
  &::after {
    bottom: -1px;
    background-color: $base;
  }
}
</style>
