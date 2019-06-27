<template>
    <section 
        ref="myBlock" 
        class='my-page myBlock' 
        :style="styles">

        <slot></slot>
    </section>
</template>

<script>
 import {
     elementIsVisibleInViewport
 } from '@/utils/global.js'
 export default{
    name: 'MyBlock',
    components: {},
    props: {
        styles: {
            type: Object,
            default: () => (
                {
                    width: 'inherit',
                    height: 'auto',
                }
            )
        },
        currIndex: {
            type: [String, Number],
            require: true
        }
    },
    watch: {},
    computed: {},
    data(){
        return {
            isBlock: false,

            isCmInit: false,
        }
    },
    methods: {
        validInScreen(){
            // this.isCmInit = elementIsVisibleInViewport(this.$refs.myBlock, true)
        }
    },
    created(){},
    mixins: []
 }
</script>

<style scoped lang='scss'>
@keyframes move_to_rg {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes move_to_lf {
    0% {
       transform: translateX(100%);
       opacity: 0; 
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@import '@/assets/style/mixin.scss';
@include b(page) {
    width: inherit;
    height: 20vh;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
}
.fade-in {
    animation: 1s move_to_rg ease forwards;
}
.fade-in-rg {
    animation: 1s move_to_lf ease forwards;
}
</style>