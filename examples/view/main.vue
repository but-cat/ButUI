<template>
<div class="Container" :color="color">
	<div class="nav" :color="color">
		<but-tree :data="navList" @nodeEvent="eventPre" childrenKey="list"/>
	</div>

	<!-- <div class="body" :color="color"> -->
	<but-docs class="body">
		<router-view/>
	</but-docs>
	<!-- </div> -->
</div>
</template>

<script>
export default {
	data() {
		return {
			navList: [{
				name: "测试",
				path: "/test"
			}]
		}
	},
	computed: {
		color() {
			return this.$color;
		}
	},
	methods: {
		createNav(config) {
			this.navList = this.navList.concat(config);
		},
		eventPre(node) {
			this.$router.push({
				path: node.path
			})
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

	&[color=light]{
		color: @light-text-primary;
		background-color: @light-background;
	}
	&[color=dark] {
		color: @dark-text-primary;
		background-color: @dark-background;
	}
}

.body {
	overflow: auto;
	padding: 0 2rem;
	flex: 1;
}

.ChapterList {
	text-indent: 14px;
}


</style>