import {Message} from 'element-ui';
import router from '../router.js'

/**
 * [_toast 全局的toast方法]
 * @param  {String} [type='success']   [类型: success, error, info]
 * @param  {String} [msg='这是一条提示信息哦!'] [方法的提示消息]
 * @param  {[type]} [duration=3}]      [持续时间]
 * @return {[type]}                    [description]
 */
export const Toast = ({type = 'success', msg = '这是一条提示信息哦!', duration = 3}) => {
  return Message({
    type,
    message: msg,
    duration: duration * 1000
  })
}

/**
 * [ObjNotNull 排除对象中的空值, 除false与0 之外]
 * @method ObjNotNull
 * @param  {[type]}   obj [description]
 */
export const ObjNotNull = obj => {
  let _obj = {}
  if(typeof obj !== 'object') return new Error('argus expect Object! please try again after validate params.')
  for (var k in obj) {
    if(obj[k] !== undefined && obj[k] !== '' && obj[k] !== null){
      _obj[k] = typeof obj[k] === 'boolean' ? ( obj[k] === true ? 1 : 0 ) : obj[k]
    }
  }
  return _obj
}

/**
 * 判断dom是否可见
 * @param {*} el 
 * @param {*} partiallyVisible 
 */
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return top < innerHeight
  // return partiallyVisible ?
  //   ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) :
  //   top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/**
 * 获取本地缓存
 * @param {} str 
 */
export const getLocalItem = str => {
  let local = localStorage
  let _temp = local.getItem(str)
  return JSON.parse(_temp)
}
export const setLocalItem = (label, value) => {
  let local = localStorage
  local.setItem(label, JSON.stringify(value))
}

export default {
  Toast,
  ObjNotNull,
  getLocalItem,
  setLocalItem
}


