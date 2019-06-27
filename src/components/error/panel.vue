<template>
  <section class="my-err-panel">
    <h3 class="my-err-panel__title">{{info.title}}</h3>
    <p class="my-err-panel__desc">{{info.desc}}</p>
    <section class="my-err-panel__btn-area">
      <el-button type="primary" @click="jump2Other">{{info.text}}</el-button>
    </section>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  export default {
    name: 'MyErrorPanel',
    components: {},
    props: {},
    model: {},
    computed: {},
    inject: ['info'],
    data (){
      return {}
    },
    watch: {},
    methods: {
      jump2Other(){
        this.$router.push({path: this.info.link})
      }
    },
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(err-panel) {
  margin-left: 10%;

  @include e(title) {
    margin-bottom: 10px;
    font-size: 40px;
  }

  @include e(desc) {
    margin-bottom: 20px;
    font-size: 16px;
    color: $t-999;
  }
}
</style>
