<template>
<div class="but-card-actions">
	<slot/>
</div>
</template>

<script>
export default {
	name: "butCardActions",
	data:()=>({

	}),
	inject: ['radius'],
	methods: {

	}
}
</script>

<style lang="less" scoped>
.but-card-actions {
	padding: 8px;
    display: flex;
	align-items: center;
	
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: stretch;
}
</style>