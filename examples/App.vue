<template>
<div id="app" >
	<views/>
</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		// color() {
		// 	return this.$color;
		// }
	},
	components: {
		// HelloWorld
		views: require('./view/main.vue').default
	}
}
</script>
<style lang="less">
// @import "./assets/style/table.less";
// @import "./assets/style/variables.less";
@import "./assets/style/typesetting.less";
@color: var(--textPrimary);
@background: var(--background);

body {
	margin: 0;
	width: 100%;
	height: 100vh;
}
#app {
	width: 100%;
	height: 100%;
	
	/* font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px; */
	.typesetting(@color, @background);
	
}

// .light(@color, @background) {
// 	// color: @color;
// 	.typesetting(var(--textPrimary), var(--background));
// 	table {
// 		.tableStyle(var(--textPrimary), var(--background));
// 	}
// }
// .dark(var(--textPrimary), var(--background)) {
// 	color: @color;
// 	.typesetting(var(--textPrimary), var(--background));
// 	table {
// 		.tableStyle(var(--textPrimary), var(--background));
// 	}
// }
</style>
