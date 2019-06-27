import store from '../store'
import router from '../router.js'
import {MessageBox} from 'element-ui'
import {Toast} from '@/utils/global'

/**
 * [handleBtnAddClick 共有方法 -- 添加按钮事件]
 * @param  {[type]} argus [description]
 * @return {[type]}       [description]
 */
export const handleBtnAddClick = (...argus) => {
  store.commit('DIALOG_CLAOSE_SYNC', true)
}

/**
 * [handleBtnDelClick 共有方法 -- 删除按钮事件]
 * @param  {[type]} argus [description]
 * @return {[type]}       [description]
 */
export const handleBtnDelClick = (...argus) => {
  MessageBox({
    title: 'Tips',
    message: '该操作将会删除此条信息, 请确认!',
    showCancelButton: true,
    cancelButtonText: 'cancel',
    confirmButtonText: 'submit'
  }).then(e => {
    Toast({
      type: 'success',
      msg: '操作成功!'
    })
  }).catch(e => {
    Toast({
      type: 'warning',
      msg: '操作已取消或操作失败!'
    })
  })
}
