<template>
<div id="app" :color="color">
	<views/>
</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		color() {
				return this.$color;
		}
	},
	components: {
		// HelloWorld
		views: require('./view/main.vue').default
	}
}
</script>
<style lang="less">
@import "./assets/style/table.less";
@import "./assets/style/variables.less";
@import "./assets/style/typesetting.less";

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
	&[color=light]{
		.light(@light-text, @light-background);
	}
	&[color=dark] {
		.light(@dark-text, @dark-background);
	}
	
}

.light(@color, @background) {
	color: @color;
	.typesetting(@color, @background);
	table {
		.tableStyle(@color, @background);
	}
}
.dark(@color, @background) {
	color: @color;
	.typesetting(@color, @background);
	table {
		.tableStyle(@color, @background);
	}
}
</style>
