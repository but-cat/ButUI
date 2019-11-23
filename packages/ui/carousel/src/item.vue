<template>
<div class="item">
	<slot/>
</div>
</template>

<script>
export default {
	name: 'ButCarouselItem',
	props: {
		bodyStyle: {
			type: Object,
			default: function () {
				return {}
			}
		},
		elevation: {
			type: Number,
			default: 3
		}
	}
}
</script>

<style lang="less" scoped>

.item {
	width: 100%;
	height: 100%;
	flex: 1 0 100%;
	
	// position: absolute;
	left: 0%;
	top: 0;
	transition: .3s;

	&:nth-child(2n) {
		background-color: #6f7781;
	}

	&:nth-child(2n+1) {
		background-color: #636363;
	}
}
</style>
