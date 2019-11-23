<template>
<div :class="colClass">
<slot/>
</div>
</template>

<script>
export default {
	name: 'ButCol',
	props: {
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
	data() {
		return {

		}
	},
	computed: {
		colClass() {
			let colClass = ''
			for(let cols in this.col){
				colClass += cols + '-' + this.col[cols] + ' ';
			}
			return colClass
		}
	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
// 框架网格生成
//
// 给定任何@ grid-columns值，Bootstrap仅使用它生成正确数量的网格类。

@grid-columns:              12;															//** 网格中的列数.
@grid-gutter-width:         30px;														//** 列之间的填充,分为左右一半.
// @grid-float-breakpoint:     @screen-sm-min;
//** Point at which the navbar begins collapsing.
// @grid-float-breakpoint-max: (@grid-float-breakpoint - 1);


/* 循环创建列填充 */
.cont(@index) when (@index > 0) {
	.cont((@index - 1));
	.xs-@{index} {
		width: percentage((@index / @grid-columns));
	}
	.sm-offset-@{index} {
		margin-left: percentage((@index / @grid-columns));
	}
	@media (min-width: @screen-sm) {										/*当宽度大于768px时触发*/
		.sm-@{index} {
			width: percentage((@index / @grid-columns));
		}
		.sm-offset-@{index} {
			margin-left: percentage((@index / @grid-columns));
		}
	}
	@media (min-width: @screen-md) {										/*当宽度大于992px时触发*/
		.md-@{index} {
			width: percentage((@index / @grid-columns));
		}
		.md-offset-@{index} {
			margin-left: percentage((@index / @grid-columns));
		}
	}
	@media (min-width: @screen-lg) {										/*当宽度大于1200px时触发*/
		.lg-@{index} {
			width: percentage((@index / @grid-columns));
		}
		.lg-offset-@{index} {
			margin-left: percentage((@index / @grid-columns));
		}
	}

}
.cont(@grid-columns);

</style>