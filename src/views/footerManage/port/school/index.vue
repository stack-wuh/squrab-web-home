<template>
  <section class='my-page my-port-scholl'>
    <section class="my-wrap">
      <nav class="my-wrap__lf">   
        <el-menu
          @select="handleSelectChange" 
          class="my-el-menu" 
          v-bind="menuConf">
          <el-submenu 
            v-for="(item, index) in list"
            :key="'l' + index"
            :index="item.mark">
            <template>
              <span class="my-submenu__title" :class="item.icon" slot="title" style="margin-right: 2em;">{{item.label}}</span>
            </template>
            <el-menu-item 
              v-for="(ss, sid) in item.children"
              :key="'s' + sid"
              :index="ss.mark">
              <template>
                <span slot="title">{{ss.label}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu> 
        <router-link class="is-router-link" :to="{path: '/footer/port/school'}">查看校园招聘</router-link>
      </nav>

      <section v-loading="isShowLoading" class="my-wrap__rg">
        <el-table :data="data" border stripe>
          <el-table-column align="center" label="职位名称" prop="label"></el-table-column>
          <el-table-column align="center" label="职位类别" prop="rename"></el-table-column>
          <el-table-column align="center" label="招聘人数" prop="count"></el-table-column>
          <el-table-column align="center" label="工作地点" prop="site"></el-table-column>
        </el-table>
      </section>
    </section>
  </section>
</template>

<script>
 import $api from 'axios'
 import MockStore from './mock'
 export default{
  name: 'FootterPortSchool',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      list: [
        {
          label: '工作地点',
          mark: '1',
          icon: 'my-icon-position_blue',
          children: [
            {
              label: '武汉',
              mark: '1-1'
            }
          ]
        },
        {
          label: '职位类别',
          mark: '2',
          icon: 'my-icon-category_blue',
          children: [
            {
              label: '市场类',
              mark: '2-1'
            },
            {
              label: '运营类',
              mark: '2-2'
            },
            {
              label: '技术类',
              mark: '2-3'
            }
          ]
        }
      ],
      menuConf: {
        backgroundColor: '#f5f5f5',
        textColor: '#2d2d2d',
        activeTextColor: '#1FA2FF',
        uniqueOpened: true,
        collapseTransition: true,
        defaultActive: '1',
        defaultOpeneds: ['1-1'],
        hoverBackground: '#ffffff'
      },
      data: [],
      isShowLoading: false,

      MockStore,
    }
  },
  methods: {
    handleSelectChange(e) {
      let transfer = {
        '1-1': {site: '武汉'},
        '2-1': {category: 1},
        '2-2': {category: 2},
        '2-3': {category: 3},
      }
      this.fetchData(transfer[e])
    },

    fetchData({site = '武汉', category = -1} = {}){
      this.isShowLoading = true
      const transfer = {
        rename: ['市场部', '运营部', '技术部']
      }
      let {list} = this.MockStore
      let store = Object.values(list)
                    .flat(1)
                    .filter(kk => category > 0 ? kk.category == category : kk.site == site)
                    .map(kk => ({...kk, rename: transfer.rename[+kk.category - 1]}))
      setTimeout(() => {
        this.data = store || []
        this.isShowLoading = false
      }, 1000)
    }
  },
  created(){
    this.fetchData()
  },
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@include b(page) {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
@include b(wrap) {
  @include flex($dir: row, $align: strech);
  min-height: 400px;
  @include e(lf) {
    @include flex($dir: column, $align: strech, $justify: space-between);
    width: 20%;
    padding: 30px 0;
    box-sizing: border-box;
    background-color: #f5f5f5;
  }
  @include e(rg) {
    width: 80%;
    padding: 80px 150px;
    box-sizing: border-box;
  }
}
@include when(router-link) {
  width: 100%;
  padding-right: 20px;
  color: #202020;
  text-decoration: underline;
  text-align: right;
  box-sizing: border-box;
}
.my-submenu__title{
  &::before {
    color: $--color-default;
    margin-right: 15px;
  }
}
</style>