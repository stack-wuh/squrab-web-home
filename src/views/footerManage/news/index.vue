<template>
  <section class='my-page'>
    <section class="my-wrap">
      <ul class="my-wrap__list">
        <li 
          v-for="(item, index) in 4"
          :key="'news' + index"
          class="my-wrap__item">
          <section class="lf">
            <div class="img-box">
              <img src="../../../assets/imgs/footer/news/item-default.png" alt="news_logo">
            </div>
          </section>
          <section class="rg my-item__rg">
            <h3 class="rg__title">最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题最多两行标题</h3>
            <p class="rg__time">
              <time>2019年6月17日</time>
              <small>咨询</small>
            </p>
            <article class="rg__art">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eveniet, vitae doloribus expedita temporibus magni saepe voluptatibus fugit soluta hic consequatur doloremque tempore repellat minus dicta nemo minima non mollitia!
              this is name this is name this is name this is name
            </article>
          </section>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
 export default{
  name: 'FooterNews',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';

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
    @include flex($dir: row);
    & > .lf {
      flex: .4;
      margin-right: 45px;
      .img-box {
        width: inherit;
        & > img {
          width: auto;
          max-width: 100%;
        }
      }
    }
    & > .rg {
      flex: 1;
    }
  }
}

@include b(item) {
  @include e(rg) {
    padding: 20px 0;
    box-sizing: border-box;
    .rg__title {
      height: 3em;
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
    }
  }
}
</style>