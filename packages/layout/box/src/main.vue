<template>
<div :style="{}" class="container">
	<div class="head">
		<slot name="head"/>
	</div>
	<div class="body">
		<slot/>
	</div>
	<div class="tail">
		<slot name="tail"/>
	</div>
</div>
</template>

<script>
export default {
	name: "ButBox",
	props: {
		head: {
			type: Number,
			default: 300
		},
		tail: {
			type: Number,
			default: 300
		},
		Direction: {
			type: String,
			default: "row"
		}
	},
	computed: {
		container: {
			
		}
	}
}
</script>

<style lang="less" scoped>


.container {
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	min-width: 0;

	background-color: blueviolet;
}
</style>