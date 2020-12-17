<template lang="pug">
  div
    div(title='弹出式菜单', link='/candy/tests/index.html', legend='back menu')
      div(style='margin: 10px;')
        p-button(type="primary inline", @click='clickBtn')| 原始按钮
        p-button(type="danger inline")| 危险按钮
      div(style='margin: 10px;')
        p-button(type="warn inline")| 警告按钮
        p-button(type="default inline")| 默认按钮

    div plain按钮
      div(style='margin: 10px;')
        p-button(type="plain-primary inline")| 原始按钮
        p-button(type="plain-danger inline")| 危险按钮
      div(style='margin: 10px;')
        p-button(type="plain-warn inline")| 警告按钮
        p-button(type="plain-default inline")| 默认按钮

    div 禁用按钮
      div(style='margin: 10px;')
        p-button(:disabled="true" type="primary", @click='clickBtn')| 原始按钮
        p-button(:disabled="true" type="danger")| 危险按钮
        p-button(type="danger", :loading='true')| loading危险按钮
        p-button(:disabled="true" type="warn")| 警告按钮
        p-button(:disabled="true" type="plain-disabled")| plain按钮
        p-button(:disabled="true" type="default")| 默认按钮

    div 小型按钮
      div(style='margin: 10px;')
        p-button(size="mini",type="primary inline")| 原始按钮
        p-button(size="mini",type="danger inline")| 危险按钮
      div(style='margin: 10px;')
        p-button(size="mini",type="warn inline")| 警告按钮
        p-button(size="mini",type="default inline")| 默认按钮

    div 带icon/loading的按钮
      div(style='margin: 10px;')
        p-button(size="mini",type="plain-primary inline", :loading='true')| 原始按钮
        //- p-button(size="mini",type="plain-danger inline", icon='ion-ios-settings-strong')| 危险按钮
        p-button(type="danger inline", size="mini",  icon='ion-star')| 危险按钮

</template>
<script>
export default {
    data() {
        return {}
    },
    components: {
        // CActionsheet
    },
    mounted() {},
    created() {},
    methods: {
        clickBtn() {
            alert("点击了按钮")
        }
    }
}
</script>
<style lang="less">
.panel {
    text-align: center;
    margin: -10px -10px;
}

.title {
    color: #888;
    font-size: 8px;
}
</style>
