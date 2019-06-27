<template>
  <section class="my-page-search">
    <ul class="my-search-list">
      <li
        v-for="(item, index) in searchList"
        :key="index"
        class="my-search-list__item"
        :class="[
          item.type == 'daterange' ? 'my-search-list__item--daterange' : '',
          item.type == 'buttongroup' ? 'my-search-list__item--buttongroup' : '',
        ]">
        <template v-if="item.type == 'input'">
          <el-input :placeholder="item.label" v-model="searchForm[item.field]" clearable />
        </template>

        <template v-else-if="item.type == 'select'">
          <el-select
            v-model="searchForm[item.field]"
            :placeholder="item.label"
            clearable>
              <el-option
                v-for="(sub, sid) in item.list"
                :key="sid"
                :label="sub.label"
                :value="sub.value" >
              </el-option>
          </el-select>
        </template>

        <template v-else-if="item.type == 'daterange'">
          <el-date-picker
            v-model="searchForm[item.field]"
            range-separator="至"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </template>

        <template v-else-if="item.type == 'buttongroup'">
          <span
            v-for="(btn, bid) in item.list"
            :key="'b' + bid">
          {{btn.text}}</span>
        </template>
      </li>
      <li class="flex-empty"></li>
      <li class="flex-empty"></li>
      <li class="flex-empty"></li>
    </ul>
    <div class="my-search-button-area">
      <el-button size="small" type="primary" icon="el-icon-search" @click="handleSubmit">search</el-button>
      <el-button size="small" type="" icon="el-icon-delete" @click="CLEAR_SEARCH_FORM_SYNC">reset</el-button>
    </div>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import SearchModel from '@/utils/search.js'
  export default {
    name: 'MySearch',
    components: {
      SearchModel
    },
    props: {},
    model: {},
    data (){
      return {
        SearchModel,
        emptySelect: '',
      }
    },
    computed: {
      ...mapState({
        searchForm: state => state.searchForm
      }),
      searchList(){
        return this.SearchModel[0].list
      },
      changePath(){
        return this.$route.path
      }
    },
    watch: {
      changePath(){
        this.CLEAR_SEARCH_FORM_SYNC()
      }
    },
    methods: {
      ...mapMutations(['CLEAR_SEARCH_FORM_SYNC']),
      /**
       * [handleSubmit 处理search表单的提交事件]
       * @return {[type]} [description]
       */
      handleSubmit(){
        console.log(this.searchForm)
      }
    },
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(page-search) {
  padding: 20px;
  margin-bottom: 15px;
  background-color: #F4F4F4;
  border-radius: 4px;

  @include b(search-list) {
    @include flex($dir: row, $justify: flex-start, $align:center, $wrap: wrap);
    @include e(item){
      margin-right: 10px;
      margin-bottom: 5px;
      @include m(buttongroup){
        font-size: 14px;
        color: $base;
        & > span {
          margin-right: 5px;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .flex-empty {
      flex: 0 0 auto;
      visibility: hidden;
    }
  }
  @include b(search-button-area) {
    margin-top: 10px;
  }
}
</style>
