// import { Loading } from 'element-ui';

export default function(axios) {
    const loading = {
        num: 0,
        open() {
            if (this.num === 0) {
                // this.instance = Loading.service({
                //     text: '玩命加载中...',
                //     background: 'rgba(255, 255, 255, 0.6)',
                // });
            }
            this.num++;
        },
        close() {
            this.num--;
            if (this.num === 0) {
                // this.instance.close();
            }
        },
    };

    axios.interceptors.request.use(
        function(config) {
            loading.open();
            return config;
        },
        function(error) {
            return Promise.reject(error);
        },
    );

    axios.interceptors.response.use(
        function(response) {
            loading.close();
            return response;
        },
        function(error) {
            loading.close();
            return Promise.reject(error);
        },
    );
}
