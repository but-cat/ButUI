<template>
<div id="app">
	<views/>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',
	components: {
		// HelloWorld
		views: require('./view/main.vue').default
	}
}
</script>

<style>
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
}
</style>
