<template>
<div :color="color" class="container">
	<slot/>
</div>
</template>

<script>
export default {
	name: 'ButDocs',
	computed: {
		color() {
			return this.$color;
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
@import './typesetting.less';
// 默认
.container {
	&[color=light]{
		.docs(@light-text-primary, @light-background-variant);

	}

	&[color=dark] {
		.docs(@dark-text-primary, @dark-background-variant);
	}
}
</style>