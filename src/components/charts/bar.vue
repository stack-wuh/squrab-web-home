<template>
  <section class="my-page-bar">
    <div
      id="myBar"
      class="my-bar"
      :class="'my-bar' + Math.random()">
    </div>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import ops from './config.js'
  import {resize} from './mixin/resize'

  const Option = {
    color: ['#3398DB'],
    title: {
      text: 'isko'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            minInterval: 1
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
  }

  export default {
    components: {},
    props: {},
    model: {},
    data (){
      return {
        Option,
        chart: null
      }
    },
    computed: {},
    watch: {},
    methods: {
      init(){
          let myChart = echarts.init(document.getElementById('myBar'))
          myChart.setOption({...this.Option, ...ops})
          this.chart = myChart
      },
    },
    created(){
      setTimeout(() => {
        this.init()
      }, 1000, false)

    },
    mixins:[resize]
  }
</script>

<style scoped lang="scss">
  @import '@/assets/style/mixin.scss';
  @include b(page-bar) {
    @include b(bar) {
      width:inherit;
      min-height: 300px;
    }
  }
</style>
