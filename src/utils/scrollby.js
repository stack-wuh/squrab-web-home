class scrollBy {
  /**
   * 
   * @param {*} props 
   * elems: 获取指定的elems
   */
  constructor(props){
    this.state = {
      path: [],
      navLightIndex: this.navLightIndex,
      timer: this.timer,
      isInfinite: this.isInfinite
    }
    this.currIndex = 0
    this.navLightIndex = 0
    this.timer = null
    this.isInfinite = true
    Object.assign(this.state, props)
    this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    this.elems = [...document.querySelectorAll(props)]

    this.init()

    this.setTargetY = this.setTargetY.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
    this.log = this.log.bind(this)
    this.watchScrollE = this.watchScrollE.bind(this)
    this.autoPlay = this.autoPlay.bind(this)
    this.init = this.init.bind(this)
    this.destoryed = this.destoryed.bind(this)
  }

  autoPlay({duration = 2000, index = 0} = {}) {
    let length = this.elems.length
    if(index != 0) this.setTargetY(1)
    this.clearAutoPlayer()
    this.timer = setInterval(() => {
      if(index < length - 1) {
        index ++
        this.setTargetY(index)
      }else {
        if(!this.isInfinite) return
        index = 0
        this.setTargetY(index)
        this.clearAutoPlayer()
        setTimeout(() => {
          this.autoPlay({duration})
        }, duration)
      }
    }, duration)
  }
  clearAutoPlayer(){
    clearInterval(this.timer)
    this.timer = null
    this.isInfinite = false
  }

  getTargetY(){
    this.elemsTarget = this.elems.map((val, _) => {
      return {
        id: val.id,
        index: _,
        offsetTop: val.offsetTop,
        offsetHeight: val.offsetHeight, 
        rect: val.getBoundingClientRect(),
        visibilityY: 
          _ < this.elems.length - 1 ? 
            val.offsetTop + Math.round(val.offsetHeight/2):
              val.offsetTop
      }
    })
  }

  setTargetY(index){
    this.state.path.push({from: this.navLightIndex, to: index})
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

  init(){
    this.getTargetY()
    this.watchScrollE({init: true})
  }

  watchScrollE({init} = {}){
    window.addEventListener('scroll', () => {
      let {pageYOffset} = window
      let maxOffsetHeight = this.elemsTarget[this.elemsTarget.length - 1]
      if(maxOffsetHeight.offsetTop <= pageYOffset) {
        this.destoryed()
      }else {
        this.isInfinite = true
      }
      this.getTargetY()
      this.elemsTarget.forEach((val, _) => {
        if(
          init &&
          (pageYOffset > val.offsetTop - 100) &&
          (pageYOffset < val.offsetTop + 100 )
        ) {
          this.navLightIndex = _
        }
        if(
          (val.visibilityY > pageYOffset - 100) &&
          (val.visibilityY < pageYOffset + 100)
        ) {
          // console.log(pageYOffset, _)
          this.navLightIndex = _
          // this.log()
        }
      })
    }, true)
  }

  destoryed (){
    // console.info('scrollBy scroll event is destoryed')
    window.removeEventListener('scroll', this.clearAutoPlayer, true)
  }
}

export default scrollBy