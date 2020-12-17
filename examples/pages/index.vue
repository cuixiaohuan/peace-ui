<template lang="pug">
    div
        c-list(title='操作列表', legend='actionsheet', href='#/action')
        c-list(title='按钮', legend='button', href='#/button')
        //- c-list(title='时间', legend='datepicker', href='#/datepicker')
        c-list(title='列表', legend="list", href='#/list')
        c-list(title='滑块', legend="slider", href='#/slider')
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    components: {

    },
    mounted() {},
    created() {},
    methods: {
    }
}
</script>
<style lang="less"></style>
