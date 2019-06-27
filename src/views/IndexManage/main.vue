<template>
    <section class='my-page' id="scroll-box">
        <header class="my-page__header">
            <div class='img-wrap'>
                <img src="../../assets/imgs/logo.png" alt="logo">
            </div>
        </header>
        <transition-group name="fade" mode="out-in">
            <Home key="home" id="home" class="my-child" />
            <Technology key="technology" id="technology" class="my-child" />
            <Lift key="lift" id="lift" class="my-child" />
            <Future key="future" id="future" class="my-child" />
            <Join key="join" id="join" class="my-child" />
        </transition-group>
        <MyNavBar 
            @open-click="handleOpenClick" 
            v-model="currIndex" 
            :light-index="navLightIndex">
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
 import scrollBy from '@/mixins/scrollby'

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
    watch: {
        currIndex(){
            this.handleScrollBy()
        },

    },
    computed: {},
    data(){
        return {
            currIndex: 0, // 当前位置
            navLightIndex: 0, // nav组件中的高亮下标
            timer: null,  //全局定时器
            delay: 3000, // 定时器的执行时间
            isAutoScroll: false, // 是否自动滚动
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
            if(this.autoScrollBy) {
                this.autoScrollBy = false
                clearInterval(this.timer)
                this.timer = null
            }
        },
        /**
         * 设置元素滚动
         * 按照偏移距离滚动至指定位置
         */
        handleScrollBy (){
            // this.$router.push({path: event.item.hash})
            let elems = document.getElementsByClassName('my-child'),
                elem = elems[this.currIndex]
            let rect = elem.getBoundingClientRect()
            let targetY = elem.offsetTop
            let scrollTo = document.body.scrollTop || document.documentElement.scrollTop
            // console.log(`rect: ${rect.top}, scrollTop: ${scrollTo}, targetY: ${targetY}`)
            if(rect.top > 0) { // 向下滚动
                scrollTo = document.body.scrollTop = document.documentElement.scrollTop += 40
                if(scrollTo <= targetY - 10) {
                    window.requestAnimationFrame(this.handleScrollBy)
                }else {
                    scrollTo = document.body.scrollTop = document.documentElement.scrollTop = targetY
                }
            }else { // 向上滚动
                scrollTo = document.body.scrollTop = document.documentElement.scrollTop -= 40
                if(scrollTo >= targetY + 10) {
                    window.requestAnimationFrame(this.handleScrollBy)
                }else {
                    scrollTo = document.body.scrollTop = document.documentElement.scrollTop = targetY
                }
            }
        },
        
        /**
         * 自动播放
         */
        autoScrollBy (){
            let length = document.getElementsByClassName('my-child').length
            this.isAutoScroll = true
            this.timer = setInterval(() => {
                this.currIndex = this.currIndex < length - 1 ? ++this.currIndex : 0
            }, this.delay, false)
        },
        
        /**
         * 计算当前位置位于哪一个currIndex
         */
        calcOffsetY(){
            let elems = [...document.getElementsByClassName('my-child')]
            let rects = []
            let {innerHeight} = window
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            let _elems = elems.map((val, _) => {
                let _offsetHeight = val.offsetHeight * _
                if( 
                    (scrollTop >= _offsetHeight) && 
                    (scrollTop <= (val.offsetHeight * (_ + 1)))
                ) {
                    this.addElemClassName(val)
                    return {index: _}
                }
            }).filter(Boolean).pop()
            _elems && (this.navLightIndex = _elems.index)
            return Promise.resolve(_elems)
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.calcOffsetY().then(res => {
                let { index } = res
                if(this.currIndex !== index) 
                    this.currIndex = index
            })
        })
        window.addEventListener('scroll', this.calcOffsetY, true)
        window.addEventListener('visibilitychange', () => {
            let state = document.visibilityState
            if(state == 'visible' && this.isAutoScroll) {
                this.autoScrollBy()
            }else {
                clearInterval(this.timer)
            }
        })
    },
    mixins: [scrollBy]
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