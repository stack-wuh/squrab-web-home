<template>
  <section class='my-page'>
    <section class="my-wrap">
      <section 
        v-for="(item, index) in List"
        :key="'port' + index"
        class="my-wrap__item">
          <section
            @click="handleJump(item)"
            :style="{backgroundImage: 'url(' + item.bgImg + ')'}" 
            class="my-wrap__item--trans is-trans">
            <section class="my-wrap__item--box ">
              <h3 class="my-wrap__item--title">{{item.title}}</h3>
              <h4 class="my-wrap__item--sub">{{item.sub}}</h4>
            </section>
          </section>
        </section>
    </section>
  </section> 
</template>

<script>
 const List = [
   {
     title: '校园招聘',
     sub: 'School Recruilment',
     bgImg: require('@/assets/imgs/footer/port/bg_1.png'),
     path: '/footer/port/school'
   },
   {
     title: '社会招聘',
     sub: 'Social Recruitment',
     bgImg: require('@/assets/imgs/footer/port/bg_2.png'),
     path: '/footer/port/social'
   }
 ]
 export default{
  name: 'FooterPort',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      List
    }
  },
  methods: {
    handleJump(item){
      this.$router.push({path: item.path})
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
@import '@/assets/style/mixin.scss';
@import '@/assets/style/color.scss';
@include b(page) {}
@include b(wrap) {
  @include flex($dir: row, $justify: space-between, $align: center);
  padding: 188px 0 440px;
  box-sizing: border-box;
  @include e(item) {
    position: relative;
    width: 538px;
    height: 428px;
    color: $t-white;

    &::before {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      content: '';
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #fff;
    }
    &:hover {
      .is-trans {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: rgba(255, 255, 255, .8);
        background-size: 160% 160%;
        background-position: 20% 20%;
        transform-origin: center center ;
        box-shadow: 2px 20px 20px #999;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow .8s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }

    @include m(trans) {
      @include flex($justify: center, $align: center);
      width: 100%;
      height: 100%;
      box-shadow: 2px 10px 10px #ccc;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    @include m(box) {
      text-align: center;
    }
    @include m(title) {
      font-size: $--font-size--big * 2;
      line-height: 1.5em;
    }
    @include m(sub) {
      font-size: $--font-size-large * 2;
      line-height: 1.5em;
    }
  }
}
</style>