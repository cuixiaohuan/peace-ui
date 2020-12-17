<template lang="pug">
div
	p-panel(title="panel标题", height="300px")
		//- p-list(:title="'new item'+item", legend='pullingDown')
		//- p-list(:title="'new item'+item", legend='pullingUp')
		//- p-list(title='文字标题', legend='说明文字3', href='javascript:;')

	p-panel(
		title="panel标题",
		link="/candy/tests/index.html",
		height="auto",
		legend="back menu",
		icon="ion-person"
	)
		p-list(title="文字标题", legend="说明文字3", icon="ion-ios-alarm-outline")
		p-list(
			title="文字标题",
			legend="说明文字3",
			icon="ion-ios-cog-outline",
			href="javascript:;"
		)
		template(slot="footer")
			p-list(title="查看更多", href="javascript:;")


</template>
<script>
export default {
	data() {
		return {
			list: [
				{ title: "native", legend: "item" },
				{ title: "native", legend: "item" },
				{ title: "native", legend: "item" },
				{ title: "native", legend: "item" },
				{ title: "native", legend: "item" },
				{ title: "native", legend: "item" },
			],
			down: [],
			dowmCount: 1,
			upCount: 1,
			up: [],
		};
	},
	components: {
		// CActionsheet
	},
	mounted() {},
	created() {},
	methods: {
		clickBtn() {
			alert("点击了按钮");
		},
	},
};
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
