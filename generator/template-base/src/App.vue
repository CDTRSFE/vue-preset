<template>
    <div id="app">
        <%_ if (type === 'data-v') { _%>
        <scale-view scale-body :proportional="proportional">
            <router-view></router-view>
        </scale-view>
        <%_ } else { _%>
        <router-view></router-view>
        <%_ } _%>
    </div>
</template>
<script>
<%_ if (type === 'data-v') { _%>
import ScaleView from '@/components/normal/ScaleView.vue';

<%_ } _%>
export default {
    name: 'App',
    <%_ if (type === 'data-v') { _%>
    components: {
        ScaleView,
    },
    data() {
        return {
            proportional: process.env.NODE_ENV === 'development',
        };
    },
    <%_ } _%>
};
</script>

<style lang="less"></style>
