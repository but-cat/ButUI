<template>
	<main class="but-body">
		<slot/>
	</main>
</template>

<script>
export default {
	name: 'ButBody'
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-body {
	display: block;
    flex: 1;
    // flex-basis: auto;
    // padding: 20px;
}
</style>