<template lang="pug">
  div
    p-list(
        v-for="item in list",
        :legend="item.legend",
        :title="item.title",
        :icon='item.icon',
        :href="item.href"
    )

</template>
<script>
export default {
    data() {
        return {
            list: [{
                title: "这是一个列表11",
                icon: "ion-map",
                legend: "☁️",
                href: "/"
            }, {
                title: "这是一个列表2",
                icon: "ion-lock-combination",
                legend: "😃",
                href: "/"
            }, {
                title: "这是一个列表3",
                icon: "ion-arrow-graph-up-right",
                legend: "❀",
                href: "/"
            }, {
                title: "这是一个列表4",
                icon: "ion-pie-graph",
                legend: "🌧",
                href: "/"
            }]
        }
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
