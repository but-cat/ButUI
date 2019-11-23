<template>
<footer class="el-footer" :style="{ height }">
	<slot/>
</footer>
</template>

<script>
export default {
	name: 'ElFooter',
	componentName: 'ElFooter',
	props: {
		height: {
			type: String,
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