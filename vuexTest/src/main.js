// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {getRequest, postRequest, uploadFileRequest, deleteRequest, putRequest} from './api/axios'
import url from './api/url'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'
import './assets/icon.css'
import '@babel/polyfill'

Vue.use(ElementUI)
Vue.use(Share)
Vue.prototype.$url = url
Vue.prototype.$fetch = getRequest
Vue.prototype.$post = postRequest
Vue.prototype.$delete = deleteRequest
Vue.prototype.$put = putRequest
Vue.prototype.$uploadFile = uploadFileRequest
Vue.config.productionTip = false
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
