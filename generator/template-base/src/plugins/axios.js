<%_ if(version === 'v2') { _%>
import Vue from 'vue';
<%_ } _%>
import axios from 'axios';
import qs from 'qs';
import loading from './loading';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000 // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);

loading(_axios);

_axios.interceptors.request.use(
    function(config) {
        if (config.method === 'post' && ((!config.headers['Content-Type'] && config.data.toString() === '[object Object]') || config.headers['Content-Type'] === 'application/x-www-form-urlencoded')) {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    },
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求';
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '请求错误，未找到该资源';
                    break;
                case 405:
                    error.message = '请求方法未允许';
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务端出错';
                    break;
                case 501:
                    error.message = '网络未实现';
                    break;
                case 502:
                    error.message = '网络错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网络超时';
                    break;
                case 505:
                    error.message = 'http版本不支持该请求';
                    break;
                default:
                    error.message = `连接错误${error.response.status}`;
            }
        } else {
            error.message = '连接服务器失败';
        }
        return Promise.reject(error);
    },
);

Plugin.install = function(app) {
    window.axios = _axios;
    app.axios = _axios;
    <%_ if(version === 'v2') { _%>
    Object.defineProperties(app.prototype, {
    <%_ } else { _%>
    Object.defineProperties(app.config.globalProperties, {
    <%_ } _%>
        axios: {
            get() {
                return _axios;
            },
        },
        $axios: {
            get() {
                return _axios;
            },
        },
    });
};

<%_ if(version === 'v2') { _%>
Vue.use(Plugin);
<%_ } _%>

export default Plugin;
