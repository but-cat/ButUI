<template>
<div class="but-page">
	<slot></slot>
</div>
</template>
<script>
export default {
	name: 'ButPage',
};
</script>
<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-page {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
	margin-left: auto;

	display: flex;
	flex-direction: column;
	align-content: center;

	@media (min-width: @screen-sm) {
		width: @container-sm;
	}
	@media (min-width: @screen-md) {
		width: @container-md;
	}
	@media (min-width: @screen-lg) {
		width: @container-lg;
	}
}
</style>