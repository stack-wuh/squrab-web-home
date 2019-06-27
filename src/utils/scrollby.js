class scrollBy {
  /**
   * 
   * @param {*} props 
   * elems: 获取指定的elems
   */
  constructor(props){
    this.state = {
      path: [],
      navLightIndex: 0
    }
    Object.assign(this.state, props)
    this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    this.elems = [...document.querySelectorAll(props)]
    this.getTargetY()
    this.watchScrollE()

    this.setTargetY = this.setTargetY.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
    this.log = this.log.bind(this)
    this.watchScrollE = this.watchScrollE.bind(this)
  }

  getTargetY(){
    this.elemsTarget = this.elems.map((val, _) => {
      return {
        id: val.id,
        index: _,
        offsetTop: val.offsetTop,
        offsetHeight: val.offsetHeight, 
        rect: val.getBoundingClientRect(),
        visibilityY: val.offsetTop + Math.round(val.offsetHeight/2)
      }
    })
  }

  setTargetY(index){
    this.state.path.push({from: this.currIndex||-1, to: index})
    this.currIndex = index
    this.scrollTo()
    this.log()
  }

  scrollTo(){
    try {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      let targetElem = this.elemsTarget[this.currIndex]
      let speed = Math.round(Math.abs((targetElem.offsetTop + 20) - scrollTop)/30)
      let _path = this.state.path[this.state.path.length - 1]
      let direction = _path.from < _path.to ? 1 : -1
      if(direction > 0) {
        if (scrollTop < (targetElem.offsetTop - 10)){
          scrollTop = document.body.scrollTop = document.documentElement.scrollTop += speed
          window.requestAnimationFrame(this.scrollTo)
        } else {
          scrollTop = document.body.scrollTop = document.documentElement.scrollTop = targetElem.offsetTop
        }
      }else {
        let flag = scrollTop - 17 > targetElem.offsetTop + 17
        if(flag) {
          scrollTop = document.body.scrollTop = document.documentElement.scrollTop -= speed
          window.requestAnimationFrame(this.scrollTo)
        }else {
          scrollTop = document.body.scrollTop = document.documentElement.scrollTop = targetElem.offsetTop
        }
      }
    }catch(err) {
      this.log()
      throw new Error('some error is happened: ', err)
    }
  
  }

  log(){
    console.log('this is scrollBys props', this)
  }

  watchScrollE(){
    console.log('====================================');
    console.log('this is scorll event');
    console.log('====================================');
    window.addEventListener('scroll', () => {
      let {pageYOffset} = window
      this.elemsTarget.forEach((val, _) => {
        if(
          (val.visibilityY > pageYOffset - 100) &&
          (val.visibilityY < pageYOffset + 100)
        ) {
          console.log(pageYOffset)
          this.log()
        }
      })
    }, true)
  }

  destoryed (){
    window.removeEventListener('scroll')
    
  }
}

export default scrollBy