const scrollBy = {
  data (){
    return {}
  },
  methods: {
    scrollTopBy (start, end){
      let scrollTo = document.body.scrollTop || document.documentElement.scrollTop
      scrollTo = document.body.scrollTop = document.documentElement.scrollTop += 20
    },

    addElemClassName(elem){
      console.log('====================================');
      console.log('this is add elem class name', elem);
      console.log('====================================');
      let reg = /js-animate-mark/
      if(!reg.test(elem.className))
      elem.className = elem.className + ' js-animate-mark'
    }
  }
}

export default scrollBy