<template>
<but-sandwich :head="head" @head="headSize" :color="color">
	<div slot="head" class="nav">
		<but-tree :data="navList" @nodeEvent="eventPre" childrenKey="list"/>
	</div>
	
	<div class="body">
		<router-view/>
	</div>
</but-sandwich>
</template>

<script>
export default {
	data() {
		return {
			navList: [{
				name: "测试",
				path: "/test"
			}],
			head: 300
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
		},
		headSize(value) {
			this.head = value;
		},
		tailSize(value) {
			this.tail = value;
		},

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
}

.nav {
	height: 100%;
	height: 100%;
	background-color: #eef0f411;
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