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

Vue.config.productionTip = false
Vue.use(AjaxPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
