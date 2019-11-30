<template>
<div class="tools">
	<slot/>
</div>
</template>

<script>
export default {
	name: 'ButToolsbar'
}
</script>

<style lang="less" scoped>
.tools {
	width: 100%;
	height: 100%;
	padding: 10px 0;
	box-sizing: border-box;

	display: flex;
	align-items: center;
}
</style>