<template>
    <div>
        <p>example component</p>
        <c-actionsheet
            @click="clickBtn"
            title="标题(actionsheet结合grid使用)"
            style-sheet="ios"
            :menu-list="list"
            :mask-closeable="true"
            v-model="isShow"
        ></c-actionsheet>
        <button @click="toggle">显示actionsheet</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: true,
            oper: "",
            list: [
                {
                    name: "示例11",
                    href: "#a1",
                    id: 1
                },
                {
                    name: "示例22",
                    href: "#a2",
                    id: 2
                },
                {
                    name: "示例33",
                    href: "#a3",
                    id: 3
                }
            ]
        }
    },
    components: {
        // CActionsheet
    },
    mounted() {},
    created() {},
    methods: {
        clickBtn: function(val) {
            this.oper = val
        },
        clickGrid() {
            console.log(12)
        },
        toggle() {
            this.isShow = !this.isShow
        }
    }
}
</script>
<style lang="less"></style>
