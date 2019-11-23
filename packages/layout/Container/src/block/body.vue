<template>
	<main class="but-main">
		<slot/>
	</main>
</template>

<script>
export default {
	name: 'ElMain',
	componentName: 'ElMain'
};
</script>

<style lang="less" scoped>
@import '../../../../_style/variables.less';
.but-main {
	display: block;
    flex: 1;
    flex-basis: auto;
    padding: 20px;
}
</style>