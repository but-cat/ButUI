<template>
<header class="but-header" :style="{height: (typeof this.height == 'string') ? this.height : `${this.height}px`}">
	<slot/>
</header>
</template>

<script>
export default {
	name: 'ButHeader',
	props: {
		height: {
			type: [String, Number],
			default: '60px'
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../../../_style/variables.less';
.but-header {
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>