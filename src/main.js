// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'normalize.css/normalize.css'
// import './styles/amazeui.scss'
import 'amazeui/dist/css/amazeui.min.css'
import 'github-markdown-css/github-markdown.css'
import './styles/code.styl'
import AjaxPlugin from './plugins/ajax'
import {$http} from './plugins/ajax'
import qs from 'qs'

Vue.prototype.$qs = qs;

Vue.config.productionTip = false
Vue.use(AjaxPlugin)

// 注册一个全局自定义指令 `v-md`
Vue.directive('md', {
  inserted: function (el, binding) {
  },
  update: async function (el, binding) {
    let html = await new Promise((resolve, reject) => {
      try {
        $http.post("https://markdown.edik.cn", {html: binding.value}).then(res => {
          resolve(res);
        })
      } catch (error) {
        reject(error);
      }
    });
    el.innerHTML = html;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
