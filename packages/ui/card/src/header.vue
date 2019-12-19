<template>
<div class="but-card-header">
	<slot/>
</div>
</template>

<script>
export default {
	name: "butCardHeader",
	data:()=>({

	}),
	inject: ['radius'],
	methods: {

	}
}
</script>

<style lang="less" scoped>
.but-card-header {
	padding: 16px;
	box-sizing: border-box;
	// box-sizing: inherit;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
}
</style>