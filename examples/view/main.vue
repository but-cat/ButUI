<template>
<div class="Container">
	<div class="nav">
		<div v-for="(item, index) in navList" :key="index">
			<router-link :to="item.path">{{item.name}}</router-link>
		</div>
	</div>
	<div class="body">
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
.Container {
	width: 100%;
	height: 100%;
	display: flex;
	

	>.nav {
		width: 300px;
		height: 100%;
		background-color: #eef0f4;
		overflow: auto;
	}

	>.body {
		overflow: auto;
		flex: 1;
	}
}
</style>