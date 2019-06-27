const scrollBy = {
  data (){
    return {}
  },
  methods: {
    /**
     * 滚动至指定位置
     * @param {*} targetIndex, 指定位置的下标 
     */
    scrollBy(){
      let elems = document.getElementsByClassName('my-child')
      elems = Array.prototype.slice.call(elems)
      let targetElem = elems[3]
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      console.log('====================================');
      console.log('this is elems', elems)
      console.log('this is target elem', targetElem);
      console.log('====================================');
      if(scrollTop < targetElem.offsetTop - 20) {
        scrollTop = document.body.scrollTop = document.documentElement.scrollTop += 20
        window.requestAnimationFrame(this.scrollBy)
      }
      console.log(targetElem.offsetTop, scrollTop)
    },
    
    addElemClassName(elem){
      let reg = /js-animate-mark/
      if(!reg.test(elem.className)){
        let targetElem = elem.getElementsByClassName('my-wrap')[0]
        elem.className = elem.className + ' js-animate-mark'
        targetElem.className = targetElem.className + ' text-move-right'
      }
    }
  }
}

export default scrollBy