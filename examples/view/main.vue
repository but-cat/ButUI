<template>
<div class="Container">
	<div class="nav">
		<div v-for="(item, index) in navList" :key="index">
			<router-link :to="item.path">{{item.name}}</router-link>
		</div>
	</div>
	<div class="body" :color="color">
		<router-view/>
	</div>
</div>
</template>

<script>
import '../assets/style/md.css'
export default {
	data() {
		return {
			navList: []
		}
	},
	computed: {
		color() {
			return this.$color;
		}
	},
	methods: {
		createNav(config) {
			config.list.map(item =>
				this.navList.push({
					name: item.desc,
					path: item.path
				})
			);
		}
	},
	created() {
		this.createNav(require('@/router/nav.config.json'));
	}
}
</script>

<style lang="less" scoped>
// @import "../../examples/_style/variables.less";
@import "../../packages/_style/variables.less";

.Container {
	width: 100%;
	height: 100%;
	display: flex;
}

.nav {
	width: 300px;
	height: 100%;
	background-color: #eef0f4;
	overflow: auto;

	// &[color=light]{
	// 	color: @light-text-primary;
	// 	background-color: @light-background;
	// }
	// &[color=dark] {
	// 	color: @dark-text-primary;
	// 	background-color: @dark-background;
	// }
}

.body {
	overflow: auto;
	flex: 1;

	&[color=light]{
		color: @light-text-primary;
		background-color: @light-background-variant;
	}
	&[color=dark] {
		color: @dark-text-primary;
		background-color: @dark-background-variant;
	}
}
</style>