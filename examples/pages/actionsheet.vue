<template lang="pug">


    div(title='弹出式菜单', link='/candy/tests/index.html', legend='back menu')
        p {{oper}}
        button(@click=' showIos=!showIos ', size='mini', type='primary') {{showIos?'隐藏':'显示'}}菜单1
        button(@click=' showIos2=!showIos2 ', size='mini', type='primary') {{showIos2?'隐藏':'显示'}}菜单2
        button(@click=' showIos3=!showIos3 ', size='mini', type='primary') {{showIos3?'隐藏':'显示'}}菜单3
        button(@click=' showAndroid=!showAndroid ', size='mini', type='primary') {{showAndroid?'隐藏':'显示'}}菜单4

        p-actionsheet( v-model='showIos', @click="clickBtn" style-sheet='ios', :menu-list='list', :no-close="true", title='标题(描述bjandjajdasfa)')

        p-actionsheet(v-model='showIos2', @click="clickBtn", style-sheet='ios', :menu-list='list', :mask-closeable="false")
        p-actionsheet(v-model='showIos3', @click="clickBtn", title='标题(actionsheet结合grid使用)', style-sheet='ios', :menu-list='list', :mask-closeable="true")
            template(slot="content")
                //- p-grid(:cols='5', :no-border="true", style="padding: 5px 0;")
                //-     p-grid-item
                //-         .panel(@click="clickGrid")
                //-             p-icon(type='success' icon='ion-social-whatsapp-outline')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-twitter')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-chrome')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-whatsapp-outline')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-twitter')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-tux')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-github')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-chrome')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-octocat')
                //-             p.title 微信分享
                //-     p-grid-item
                //-         .panel
                //-             p-icon(type='success' icon='ion-social-chrome')
                //-             p.title 微信分享


        p-actionsheet(v-model='showAndroid', style-sheet='android', :menu-list='list', title='标题(描述bjandjajdasfa)')
        //- p-actionsheet(v-model='showAndroid', @click="clickBtn", style-sheet='2', :menu-list='list', title="style-sheet='1'")
</template>
<script>
export default {
    data() {
        return {
            showIos: false,
            showIos2: false,
            showIos3: false,
            showAndroid: false,
            oper: '',
            list: [{
                name: '示例11', href: "#a1", id: 1
            },{
                name: '示例22', href: "#a2", id: 2
            },{
                name: '示例33', href: "#a3", id: 3
            },]
        }
    },
    components: {
        // CActionsheet
    },
    mounted() {},
    created() {},
    methods: {
        clickBtn: function (val) {
            this.oper = val
        },
        clickGrid(){
            console.log(12)
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
