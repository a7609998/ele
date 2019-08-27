import axios from 'axios'
import QS from 'qs';
// axios环境的切换
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = 'http://city.upsv.com/';
// }
// else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = 'http://city.upsv.com/';
// }
// else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'http://city.upsv.com/';
// }

// axios请求超时时间
axios.defaults.timeout = 10000;

// 可选请求类型
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token 
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    const token = localStorage.getItem('token');
    token && (config.headers.token = token);
    return config;
  },
  error => {
    return Promise.error(error);
  })

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
