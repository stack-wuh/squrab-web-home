import {debounce} from '@/utils/global'

export const resize = {
  methods: {
    resize(){
      this.chart && this.chart.resize()
    }
  },
  mounted(){
    window.addEventListener('resize', this.resize)
  },
  beforeDesory(){
    window.removeEventListenter('resize', this.resize)
  }
}
