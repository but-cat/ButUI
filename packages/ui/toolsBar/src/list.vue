<template>
<div class="item">
	<slot/>
</div>
</template>

<script>
export default {
	name: 'ButToolsbarList'
}
</script>

<style lang="less" scoped>
.item {
	display: flex;
	align-items: center;
	padding: 0 10px;
	border-left: 1px solid var(--handle);

	&:not(:last-child){
		border-left: none;
	}
}
</style>