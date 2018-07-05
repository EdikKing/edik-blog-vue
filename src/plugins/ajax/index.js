import axios from 'axios'
import qs from 'qs'

var instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 1000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  paramsSerializer: function (params) {
    return qs.stringify(params)
  },
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('发送请求前')
  if('post' == config.method && config.data != ''){
    config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('数据相应前')

  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  install(Vue) {
    Vue.prototype.$http = instance
    Vue.http = instance
  },
  $http: instance
}

export const $http = instance
