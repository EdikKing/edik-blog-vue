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
import qs from 'qs'
import markdown from '@/lib/markdown'

Vue.prototype.$qs = qs;

Vue.config.productionTip = false
Vue.use(AjaxPlugin)

// 注册一个全局自定义指令 `v-md`
Vue.directive('md', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el,binding) {
  },
  update:function (el,binding) {
    el.innerHTML = markdown.render(binding.value);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
