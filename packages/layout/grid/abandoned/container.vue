<template>
<div class="but-container" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
	
</div>
</template>

<script>
export default {
	name: 'ButContainer',
	props: {
		header: {},
		bodyStyle: {},
		shadow: {
			type: String
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-container {
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: @screen-sm) {										/*当宽度大于768px时触发*/
		width: 750px;
	}
	@media (min-width: @screen-md) {										/*当宽度大于992px时触发*/
		width: 970px;
	}
	@media (min-width: @screen-lg) {										/*当宽度大于1200px时触发*/
		width: 1170px;
	}

	height: 300px;
	background-color: chartreuse;
}
</style>