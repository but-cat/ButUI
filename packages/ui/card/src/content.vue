<template>
<div class="but-card-content">
	<slot/>
</div>
</template>

<script>
export default {
	name: "butCardContent",
	data:()=>({

	}),
	inject: ['radius'],
	methods: {

	}
}
</script>

<style lang="less" scoped>
.but-card-content {
	padding: 16px;
	padding-top: 0px;
    font-size: 14px;
	line-height: 22px;
	
	flex: 1;
}
</style>