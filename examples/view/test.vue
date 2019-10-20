<template>
<div style="height: 100%;">
	<but-sandwich v-model="headValue" :direction="false">
		<div slot="head" style="background-color: #39c5bb; height: 100%;">{{headValue}}</div>
		<div style="background-color: #66ccff; height: 100%;">???</div>
		<div slot="tail" style="background-color: #dfdfdf; height: 100%;">???</div>
	</but-sandwich>
	<router-view/>
</div>
</template>

<script>
export default {
	data() {
		return {
			navList: [],
			headValue: 300
		}
	},
	computed: {
		color() {
			return this.$color;
		}
	},
	methods: {
		eventPre(node) {
			this.$router.push({
				path: node.path
			})
		},
		/*求div的绝对高度*/
		getElementTop(element) {
			return element.offsetParent ? element.offsetTop + this.getElementTop(element.offsetParent) : element.offsetTop;
			/*返回: 如果还有父级元素 则 求当前元素的高度与父级元素的高度和 否则 返回当前元素的高度*/
		}
	}
}
</script>

<style lang="less" scoped>

</style>