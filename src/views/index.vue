<template>
    <section class='my-page'>
        <!-- <my-header></my-header> -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <my-footer></my-footer>
    </section>
</template>

<script>
 import MyHeader from '@/components/nav/header'
 import MyFooter from '@/components/nav/footer'
 export default{
    name: 'AppIndex',
    components: {
        MyHeader,
        MyFooter
    },
    props: {},
    watch: {},
    computed: {},
    data(){
        return {
        }
    },
    methods: {
        fetchData(){
            this.$api.get('/user/list').then(res => {
                console.log(res)
            })
        }
    },
    created(){
        // this.fetchData()
    },
    mixins: []
 }
</script>

<style scoped lang='scss'>

</style>