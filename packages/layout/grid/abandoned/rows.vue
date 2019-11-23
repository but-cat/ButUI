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
		gutter: {
			type: Number,
			default: 0
		},
		
	},
	computed: {
		style() {
			const ret = {};

			if (this.gutter) {
				ret.marginLeft = `-${this.gutter / 2}px`;
				ret.marginRight = ret.marginLeft;
			}
			return ret;
		}
	},
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