<template>
<main class="but-row" :style="{justifyContent: alignment}">
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
		alignment: {
			validator: function (value) {
				return ["start", "end", "center", "between", "around"]
				.some(item => item == value) ? value : "center";
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
	flex-direction: row;
	justify-content: center;
	align-content: center;
	margin-bottom: 20px;

}
</style>