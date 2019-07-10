<template>
    <section class='my-page' id="scroll-box">
        <header class="my-page__header">
            <div class='img-wrap'>
                <img src="../../assets/imgs/logo.png" alt="logo">
            </div>
        </header>
            <Home key="home" id="home" class="my-child" />
            <Technology key="technology" id="technology" class="my-child" />
            <Lift key="lift" id="lift" class="my-child" />
            <Future key="future" id="future" class="my-child" />
            <Join key="join" id="join" class="my-child" />
        <MyNavBar
            @open-click="handleOpenClick"
            v-model="currIndex"
            :light-index='scroller.navLightIndex'>
        </MyNavBar>
    </section>
</template>

<script>
 import Home from './home'
 import Technology from './technology'
 import Lift from './life'
 import Future from './future'
 import Join from './join'
 import MyFooter from '@/components/nav/footer'
 import MyNavBar from '@/components/nav/navbar'
 import ScrollBy from '@/utils/scrollby.js'

 export default{
    name: 'Index',
    components: {
        Home,
        Technology,
        Lift,
        Future,
        Join,
        MyFooter,
        MyNavBar
    },
    props: {},
    watch: {},
    computed: {},
    data(){
        return {
            currIndex: 0, // 当前位置
            scroller: {
                navLightIndex: 0
            }
        }
    },
    provide (){
        return {
            Home: this
        }
    },
    methods: {
        /**
         * 点击navItem 清空autoplay的定时器
         */
        handleOpenClick(event){
            this.scroller.setTargetY(event.index)
            this.scroller.clearAutoPlayer()
        },

        addAnimateBy(){
            let rects = this.scroller.elemsTarget.map(kk => kk.rect)
            rects.forEach((val, _) => {
                let {top, bottom, height} = val
                let elem = this.scroller.elems[_]
                let _classname = elem.className
                if(_ == 0) {
                    // console.log(top, bottom)
                }
                if( 
                    top < 200 && 
                     _ !== 0
                ){
                    if(!_classname.includes('js-animate-mark')) {
                        elem.className = elem.className + ' js-animate-mark'
                    }
                    // elem.className = elem.className.replace('js-animate-mark', 'js-animate-out')
                }else if(bottom < 200) {
                    if(_classname.includes('js-animate-mark')) {
                        elem.className = elem.className.replace('js-animate-mark', '')
                    }
                }else if(Math.abs(top) + 20 > height) {
                    if(_classname.includes('js-animate-mark')) {
                        elem.className = elem.className.replace('js-animate-mark', '')
                    }
                }
                if(_ == 0) {
                    if(!_classname.includes('js-animate-mark')) {
                        elem.className = elem.className + ' js-animate-mark'
                    }
                   
                }
            })
            window.addEventListener('scroll', this.addAnimateBy, true)
        }
    },
    mounted() {
        this.scroller = new ScrollBy('.my-child')
        this.addAnimateBy()
        window.addEventListener('visibilitychange', () => {
            let state = document.visibilityState
            if(state == 'visible' && this.isAutoScroll) {
                this.autoScrollBy()
            }else {
                clearInterval(this.timer)
            }
        })
    },
    destroyed() {
        this.scroller.destoryed()
    },
    mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
.fade-enter, 
.fade-leave-active {
    transform: translateY(100%);
    opacity: 0;
}
.fade-enter-active,
.fade-leave-eative {
    transition: all .5s ease;
}
@include b(page) {
   @include e(bm) {
       position: sticky;
       bottom: 0;
       left: 0;
   }
   @include e(header) {
       position: fixed;
       top: 58px;
       left: 0;
       z-index: 1000;   
       width: 100%;
       padding: 0 10%;
       box-sizing: border-box;

      .img-wrap {
          width: 256px;
          height: 46px;

          & > img {
              width: auto;
              max-width: 100%;
          }
      }
   }
}
</style>