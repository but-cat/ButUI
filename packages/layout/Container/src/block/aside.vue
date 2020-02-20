<template>
<aside class="but-aside" :style="{width: (typeof this.width == 'string') ? this.width : `${this.width}px`}">
	<slot/>
</aside>
</template>

<script>
export default {
	name: 'ButAside',
	props: {
		width: {
			type: [String, Number],
			default: '300px'
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../../../_style/variables.less';
.but-aside {
	box-sizing: border-box;
    flex-shrink: 0;
}
</style>