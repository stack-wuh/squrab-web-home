<template>
  <section class="my-page-leftmenu">
    <el-menu
      class="my-page-leftmenu__el-menu"
      :unique-opened="true"
      router>
      <el-submenu
        v-for="(item, index) in subMenuList"
        :key="item.name + index"
        :index="item.name + index">
        <template slot="title">
          <i :class="item.icon" class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>

        <el-menu-item
          v-for="(sub, sid) in item.child"
          :key="sub.name + sid"
          :index="sub.name + sid">
          <i class="el-icon-shezhi"></i>
          <span>{{sub.name}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        v-for="(item, index) in menuItemList"
        :key="item.name + index"
        :index ="item.name + index"
        :route="{path: item.path, query: item.query}">
        <i :class="item.icon" class="el-icon-menu"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
import Menu from '@/utils/menu'
  export default {
    name: 'LayoutLeftmenu',
    components: {},
    props: {},
    model: {},
    data (){
      return {
        Menu
      }
    },
    computed: {
      subMenuList(){
        return Menu.filter(k => k.child)
      },
      menuItemList(){
        return Menu.filter(k => !k.child)
      }
    },
    watch: {},
    methods: {},
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
  @import '@/assets/style/mixin.scss';
  @include b(page-leftmenu) {
    width: 220px;
    @include e(el-menu) {
      border-right-color: transparent;
    }
  }
</style>
