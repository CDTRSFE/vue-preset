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
        return response;
    },
    function(error) {
        error.message = '连接服务器失败';
        if (error.response) {
            const statusMap = {
                400: '错误请求',
                401: '未授权，请重新登录',
                403: '拒绝访问',
                404: '请求错误，未找到该资源',
                405: '请求方法未允许',
                408: '请求超时',
                500: '服务端出错',
                501: '网络未实现',
                502: '网络错误',
                503: '服务不可用',
                504: '网络超时',
                505: 'http版本不支持该请求',
            }
            error.message = statusMap[error.response.status] || `连接错误${error.response.status}`;
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
