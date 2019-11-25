<template>
<footer class="but-footer" :style="{height: (typeof this.height == 'string') ? this.height : `${this.height}px`}">
	<slot/>
</footer>
</template>

<script>
export default {
	name: 'ButFooter',
	props: {
		height: {
			type: [String, Number],
			default: '60px'
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-container {
	padding: 0 20px;
    flex-shrink: 0;
}

.but-vertical {
	flex-direction: column;
}
.but-horizontal {
	flex-direction: row;
}
</style>