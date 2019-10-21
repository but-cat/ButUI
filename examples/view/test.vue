<template>
<div style="height: 100%;">
	<but-sandwich v-model="headValue">
		<div slot="head" style="background-color: #39c5bb; height: 100%;">{{headValue}}</div>
		<div style="background-color: #66ccff; height: 100%;">???</div>
		<div slot="tail" v-if="tes" @click="Te" style="background-color: #dfdfdf; height: 100%;">???</div>
	</but-sandwich>
	<router-view/>
</div>
</template>

<script>
export default {
	data() {
		return {
			navList: [],
			headValue: 300,
			tes: 1
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
		Te() {
			this.tes ^= 1;
		},
		/*求div的绝对高度*/
		getElementTop(element) {
			return element.offsetParent ? element.offsetTop + this.getElementTop(element.offsetParent) : element.offsetTop;
			/*返回: 如果还有父级元素 则 求当前元素的高度与父级元素的高度和 否则 返回当前元素的高度*/
		}
	},
	beforeMount() {
		this.$el.ondragstart = () => false;
	}
}
</script>

<style lang="less" scoped>

</style>