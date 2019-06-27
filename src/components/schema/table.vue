<template>
  <section class="table-wrapper">
    <header class="my-table-header">
      <span class="my-table-header__title">用户列表</span>
      <div class="my-table-header__right-area">
        <slot name="right"></slot>
      </div>
    </header>
    <el-table :data="list" :border="border" stripe width="100%" :key="Math.random()">
      <el-table-column align="center" :type="tableList.type" :label="tableList.label" fixed="left" width="70"></el-table-column>
      <section  v-for="(item, index) in tableList.list" :key="index">
        <el-table-column :width="item.width" align="center" v-if="item.type === 'default'" :label="item.label" :prop="item.field"></el-table-column>
        <el-table-column :width="item.width" align="center" v-if="item.type === 'image'" :label="item.label" :prop="item.field">
          <template slot-scope="scope">
            <img :src="scope.row[item.field]" alt="logo">
          </template>
        </el-table-column>
        <el-table-column :width="item.width" fixed="right" align="center" v-if="item.type === 'setting'" :label="item.label" :prop="item.field">
          <template slot-scope="scope">
            <el-button
              v-if="item && item.list"
              v-for="(btn, bid) in item.list"
              :key="'b' + bid"
              type="text"
              @click="btn.click({$router: $router, $route: $route, query: $route.query, btn, params: scope.row})"
              >{{btn.text}}</el-button>
          </template>
        </el-table-column>
      </section>
    </el-table>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
import {table} from '@/utils/table'
export default {
  props: {
    tableType: {
      type: String,
      default: 'index',
    },
    list: {
      type: Array,
      default: [],
      required: true,
    },
    border: {
      type: Boolean,
      default: true
    },
    params: {
      type: String,
      default: '',
      required: false
    }
  },
  name: 'MyTable',
  components: {},
  computed: {
    query(){
      return this.$route.query.c || this.$route.query.f || this.$route.query.l
    },
    tableList(){
      return table.find(kk => kk.params.includes(this.params || this.query))
    }
  },
  filters: {},
  data(){
    return {}
  },
  methods: {},
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/color.scss';
@import '@/assets/style/mixin.scss';
.table-wrapper{
  @include b(table-header){
    @include flex($dir: row, $justify: space-between, $align: center);
    height: 40px;
    padding: 0 20px;
    border: 1px solid $border-base;
    background-color: $b-base;
    font-size: 14px;
    @include e(title) {
      color: $t-999;
    }
    @include e(right-area) {
      @include flex($dir: row-reverse, $align: center);
      flex: auto;
      height: inherit;
      margin-left: 20px;
    }
  }
}
</style>
