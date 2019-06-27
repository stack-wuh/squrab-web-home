import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: process.env.VUE_APP_HTTP,
  timeout: 5 * 1000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    let {data } = config
    config.data = qs.stringify(data)
    return config
  },
  error => {
    // do something with request error
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    switch(response.status){
      case 200 : res.error && Message({message: res.error, type: 'success', duration: 3 * 1000}) 
                break;
      case 202: Message({
                  message: res.error,
                  type: 'error',
                  duration: 3 * 1000
                })
                Promise.reject(response)
                break;
      default: Message({message: '请求错误, 请稍后重试!',type: 'info',duration: 3 * 1000})
    }
    return response.data
  },
  error => {
    switch(error.response.status) {
      case 400: Message({
                  message: error.response.data.error,
                  type: 'error',
                  duration: 3 * 1000
                })
                break;
      case 401: 
      case 409: Message({
          message: error.response.data.error,
          type: 'error',
          duration: 3 * 1000
        }),
        localStorage.removeItem('token')
      break;
      default: Message({
                  message: error.response.data.error,
                  type: 'error',
                  duration: 3 * 1000
              })
    }
 
    return Promise.reject(error)
  }
)

export default service
