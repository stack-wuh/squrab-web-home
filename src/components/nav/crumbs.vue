<template>
  <section class="my-page-crumbs">
    <el-breadcrumb
      separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path: '/index'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item >系统管理</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script>
  export default {
    name: 'LayoutCrumbs',
    components: {},
    props: {},
    model: {},
    data (){
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@include b(page-crumbs) {
  width: inherit;
  height: 30px;
  line-height: 30px;
}
</style>
