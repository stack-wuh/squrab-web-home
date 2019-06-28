<template>
  <section class='my-page'>
    <section class="my-wrap">
      <ul class="my-wrap__list">
        <li 
          v-for="(item, index) in data"
          :key="'news' + index"
          class="my-wrap__item">
          <section class="lf">
            <div class="img-box" 
              :style="
                {
                  backgroundImage: 'url(' + item.coverImg + ')'
                }
              ">
            </div>
          </section>
          <section class="rg my-item__rg">
            <h3 class="rg__title">{{item.title}}</h3>
            <p class="rg__time">
              <time>{{item.time}}</time>
              <small>{{item.category}}</small>
            </p>
            <a :href="item.links[2]" target="_blank" class="rg__art" v-html="item.details"></a>
          </section>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import Store from './mock.js';
 export default{
  name: 'FooterNews',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      Store,
      data: []
    }
  },
  methods: {
    fetchData(){
      this.data = this.Store.list
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
@import '@/assets/style/color.scss';
@import '@/assets/style/animate.scss';

@-moz-document url-prefix(){
  .my-page {
    .my-wrap {
      .my-wrap__list {
        .my-wrap__item {
          .my-item__rg {
            .rg__title {
              position: relative;
              &::after {
                position: absolute;
                right: 0;
                bottom: 0;
                display: inline-block;
                width: 1em;
                height: 1.5em;
                padding: 0 .5em;
                line-height: 1.5em;
                content: '...';
                background-color: #fff;
                box-shadow: 0 10px 10px outset #ccc;
              }
            }
            .rg__art {
              position: relative;
              height: 4.5em;
              line-height: 1.5em;
              &::after {
                position: absolute;
                bottom: 0;
                right: 0;
                display: inline-block;
                width: 1em;
                height: 1.5em;
                padding: 0 .5em;
                content: '...';
                background: linear-gradient(to right, rgba(255, 255, 255, .8), rgba(255, 255, 255, 1), rgba(255, 255, 255, .8));
              }
            }
          }
        }
      }
    }
  }
}

@include b(page) {
}
@include b(wrap) {
  padding: 70px 0 90px;
  box-sizing: border-box;
  @include e(list) {

  }

  @include e(item) {
    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
    @include flex($dir: row, $align: strech);
    & > .lf {
      flex: .4;
      margin-right: 45px;
      @extend .slide-lf;
      animation-delay: .5s;
      .img-box {
        width: inherit;
        height: 100%;
        background-size: contain;
        background-position: center center;
      }
    }
    & > .rg {
      flex: 1;
      @extend .slide-right;
      animation-delay: .5s;
    }
  }
}

@include b(item) {
  @include e(rg) {
    padding: 20px 0;
    box-sizing: border-box;
    .rg__title {
      max-height: 3em;
      width: 100%;
      @include lines-over;
      font-size: $--font-size--extra-large;
      line-height: 1.5em;
      color: $t-000;
    }
    .rg__time {
      margin: .5em 0;
      line-height: 1.5em;
      & > * {
        font-size: $--font-size-middle;
        color: $--color-black-light;
      }
      & > small {
        padding-left: 10px;
        color: $warning;
        &::before {
          content: '|';
          padding-right: 10px;
          color: $--color-black-light;
        }
      }
    }
    .rg__art {
      @include lines-over(3);
      line-height: 1.5em;
      font-size: $--font-size-large;
      color: $--color-black;
      &:hover {
        cursor: pointer;
        color: $--color-black-deep;
        text-decoration: underline;
      }
    }
  }
}
</style>