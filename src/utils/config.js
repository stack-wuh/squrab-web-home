import Vue from 'vue'
import '@/assets/style/base.scss'
import '@/assets/style/color.scss';
import '@/assets/style/element/index.css'
import '@/assets/style/element.scss'
import '@/assets/iconfont/iconfont.css'
import axios from 'axios'
require('../mock/index.js')

import {
  Table,
  TableColumn,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Loading
} from 'element-ui'


Vue.use(Loading.directive);
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.prototype.$ELEMENT = {size: 'middle', zIndex: 999999}
Vue.prototype.$api = axios
Vue.prototype.$loading = Loading.service

window.uploadPath = process.env.VUE_APP_BASE_URL
window.imgBasePath = 'https://res.squrab.com/www/'
