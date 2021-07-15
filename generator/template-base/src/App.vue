<template>
    <div id="app">
        <%_ if (type === 'data-v') { _%>
        <scale-view scale-body>
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
    <%_ } _%>
};
</script>

<style lang="less"></style>
