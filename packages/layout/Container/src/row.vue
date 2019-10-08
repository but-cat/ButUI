<template>
<main class="but-row">
	<slot></slot>
</main>
</template>

<script>
export default {
	name: 'ButRow',
	props: {
		justify: {
			type: String,
			default: 'row'
		},
		col: {
			type: Object,
			default: function () {
				return {
					// xs: 1,
					// sm: 1,
					// md: 1,
					// lg: 1
				}
			}
		},
		
	},
	computed: {

	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-row {
//   margin-right: -15px;
//   margin-left: -15px;
	display: flex;
	justify-content: center;
	align-content: center;
	margin-bottom: 20px;

}
</style>