<template>
  <section class="wrapper pagination-wrapper">
    <el-pagination
      :page-size="pageSize"
      :total="total"
      :current-page="currPage"
      layout="total, prev, pager, next, jumper"
      :background="background"
      @current-change="getCurrentPage"
      ></el-pagination>
  </section>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: 'MyPagination',
  props: {
    total: {
      type: Number,
      default: 0,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10,
      required: false
    },
    background: {
      type: Boolean,
      default: false
    },
    currPage: {
      type: Number,
      default: 1,
      required: true
    },
  },
  name: '',
  components: {},
  computed: {},
  filters: {},
  data(){
    return {}
  },
  methods: {
    getCurrentPage(e) {
      this.$emit('getCurrentPage', e)
    }
  },
  created(){},
  mixins:[]
}
</script>
<style lang="scss" scoped>
.pagination-wrapper{
  height: 40px !important;
  margin: 10px 0;
  text-align: center;
}
</style>
