<template>
<div :style="{width: width}" class="navMenu">
	<slot/>
</div>
</template>

<script>
export default {
	name: "ButNavMenu",
	props: {
		width: Number
	},
	// provide: ()=>({
	// 	el: "null"
	// }),
	methods: {

	},
	mounted() {
		this.el = this.$el;
		// this.$el.style.setProperty('--NPM', '#7F583F');
	}
}
</script>

<style lang="less" scoped>
.navMenu {
	width: 100%;
	height: 100%;
	
	display: flex;
	flex-direction: row;
	align-items: flex-start;
}
</style>