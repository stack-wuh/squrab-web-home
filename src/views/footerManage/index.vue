<template>
  <section class='my-page'>
    <section class="my-page__header trans_lf" :style="style">
      <my-header class="js-mark-header slide-out">
      </my-header>
    </section>
    <my-header class="my-page__fixed-header is-header-fixed"></my-header>

    <section 
      :class="[
        this.$route.meta.isFullScreen ? 'my-page__full' : 'my-page__content'
      ]">
        <transition name="slide" mode="out-in">
          <router-view></router-view>             
        </transition>
    </section>
  </section>
</template>

<script>
 import MyHeader from './components/header'
 export default{
  name: 'FooterIndex',
  components: {
    MyHeader
  },
  props: {},
  watch: {
    '$route': function(to, from) {
      // let elem = document.getElementsByClassName('js-mark-header')[0]
      // if([...elem.classList].includes('slide-out')) {
      //   elem.setAttribute('class', 'js-mark-header')
      // }
      // setTimeout(() => {
      //   elem.setAttribute('class', 'js-mark-header slide-out')
      //   this.resetHeaderBg()
      // }, 300)        
      this.resetHeaderBg()
    }
  },
  computed: {},
  data(){
    return {
      style: {},
      index: 0
    }
  },
  methods: {
    resetHeaderBg(){
      this.index = 1
      let styles = new Map([
        [
          /news/,
          {
            bgImg: require('@/assets/imgs/footer/news/bg_banner.png')
          }
        ],
        [
          /^port$/,
          {
            bgImg: require('@/assets/imgs/footer/port/bg_banner.png')
          }
        ],
        [
          /port?school$/,
          {
            bgImg: require('@/assets/imgs/footer/port/bg_school_banner.png')
          }
        ],
        [
          /port?social$/,
          {
            bgImg: require('@/assets/imgs/footer/port/bg_social_banner.png')
          }
        ],
        [
          /self|law/,
          {
            bgImg: require('@/assets/imgs/footer/self/bg_header_banner.png')
          }
        ]
      ])
      let path = this.$route.path.replace(/\/footer|\//gi, '')
      let actions = [...styles.entries()].filter(([key, val]) => key.test(path))
      let style = actions.map(([key, val]) => {
        return {backgroundImage: 'url(' + val.bgImg + ')'}
      }).pop()
      let elem = document.getElementsByClassName('my-page__header')[0]
      let classList = [...elem.classList]
      if(!classList.includes('trans_lf')) {
        elem.setAttribute('class', 'my-page__header trans_lf')
        setTimeout(() => {
          elem.className = 'my-page__header'
        }, 1000)
      } else {
        elem.setAttribute('class', 'my-page__header')
      }
      Object.assign(this.style, style)
    },

    watchScrollE(){
      let elem = document.getElementsByClassName('my-page__header')[0]
      let targetElem = document.getElementsByClassName('my-page__fixed-header')[0]
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      let _classList = [...targetElem.classList]
      if(scrollTop > elem.offsetHeight + 40) {
        if(!_classList.includes('js-auto-fixed')) {
          targetElem.setAttribute('class', 'my-page__fixed-header js-auto-fixed')
        }
      }else {
          targetElem.setAttribute('class', 'my-page__fixed-header')
      }
    }
  },
  mounted(){
    this.resetHeaderBg()
    this.$nextTick(() => {
      window.addEventListener('scroll', this.watchScrollE, false)
    })
  },
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/animate.scss';
.slide-leave-to, 
.slide-enter-to {
  transform: translateX(-100%);
}
.slide-leave-active {
  transition: all 1s cubic-bezier(.08, 1.44, .8, -0.34);
}
@include b(page) {
  @include e(header) {
    height: 400px;
    background-image: url(../../assets/imgs/footer/news/bg_banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 100%;
  }

  @include e(content) {
    width: 1200px;
    margin: 0 auto;
  }

  @include e(fixed-header) {
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 180px;
    box-shadow: 0 10px 10px 0 #ccc;
    background-color: rgba(0, 0, 0, .8);
    background-image: url(../../assets/imgs/footer/bg_fixed.png);
    z-index:  2222 !important;
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.js-auto-fixed{
  display: block;
  animation: fade .5s forwards linear;
}

@keyframes trans {
  0% {
    opacity: 0;
    background-position: 0 0;
  }
  50% {
    background-position: -2000px -1000px;
    background-color: $--color-default;
  }
  100% {
    opacity: 1;
    background-position: 0 0;
  }
}
.trans_lf {
  animation: trans 1s linear both;
}

@keyframes slide_out {
  0% {
    opacity: 1;
    transform: scale(1) rotateX(0);
  }
  50% {
    opacity: 0;
    transform: scale(2.5) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateX(-360deg);
  }
}
.slide-out {
  animation: slide_out .5s linear both;
}

</style>