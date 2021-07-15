<template>
    <div v-if="scaleBody" :style="containerStyle" class="scale-view">
        <slot v-if="show"></slot>
    </div>
    <div v-else class="scale-view scale-box">
        <div ref="containerEle" :style="containerStyle" class="container">
            <slot v-if="show"></slot>
        </div>
    </div>
</template>
<script>
import { resizeEvent } from '@/plugins/utils.js';

const defaultSize = '1920*1080';
const splitStrToNum = str => str.split('*').map(item => Number(item));
const resolveSize = size => {
    const [w, h] = splitStrToNum(sizeValidator(size) ? size : defaultSize);
    return { w, h };
};
const sizeValidator = (value) => {
    const size = splitStrToNum(value);
    return typeof value === 'string' &&
        size.length === 2 &&
        size.every(item => item > 0);
};

export default {
    name: 'ScaleView',
    props: {
        baseSize: {
            type: String,
            default: defaultSize,
            validator: sizeValidator,
        },
        // 是否缩放 <body>
        scaleBody: {
            type: Boolean,
            default: false,
        },
        // 宽高等比缩放
        proportional: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            // 设置宽高前不显示内容
            show: false,
            // 容器的宽高样式
            containerStyle: {},
        };
    },
    watch: {
        baseSize() {
            this.$nextTick(this.setSize);
        },
    },
    mounted() {
        this.init();
        this.domResize = resizeEvent.call(this, this.parentEle, this.setSize);
    },
    beforeDestroy() {
        this.domResize.removeListeners();
    },
    methods: {
        init() {
            // 根结点
            this.htmlEle = document.querySelector('html');
            // 容器节点
            const containerEle = this.$refs.containerEle;
            // 父级节点
            this.parentEle = this.scaleBody ? this.htmlEle : containerEle.parentElement;
        },
        setSize() {
            const wrapW = this.parentEle.clientWidth;
            const wrapH = this.parentEle.clientHeight;
            const size = resolveSize(this.baseSize);
            const ratio = [wrapW / size.w, wrapH / size.h];
            // 等比缩放 宽高缩放比例得一致
            if (this.proportional) {
                if (size.w / size.h > wrapW / wrapH) {
                    ratio[1] = ratio[0];
                } else {
                    ratio[0] = ratio[1];
                }
            }
            const style = {
                width: size.w + 'px',
                height: size.h + 'px',
            };
            const scale = `scale(${ratio.join(',')})`;
            if (this.scaleBody) {
                this.containerStyle = style;
                this.htmlEle.classList.add('scale-view-flex-center');
                const bodyStyle = { ...style, flex: '0 0 auto' };
                for (const k in bodyStyle) {
                    document.body.style[k] = bodyStyle[k];
                }
                document.body.style.transform = scale;
            } else {
                this.containerStyle = { ...style, transform: scale };
            }
            this.show = true;
        },
    },
};
</script>
<style scoped lang="less">
.scale-view {
    overflow: hidden;
    .container {
        box-sizing: border-box;
        flex: 0 0 auto;
    }
    &.scale-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
}
</style>
<style>
.scale-view-flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
