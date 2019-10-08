<template>
<div class="but-card" :class="shadow" :style="bodyStyle" :color="color">
	<slot/>
</div>
</template>

<script>
export default {
	name: 'ButCard',
	props: {
		bodyStyle: {
			type: Object,
			default: function () {
				return {}
			}
		},
		elevation: {
			type: Number,
			default: 3
		}
	},
	computed: {
		shadow() {
			return 'elevation-' + this.elevation;
		},
		color() {
			return this.$color;
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

/* 循环创建海拔类 */
// .generate-columns(@n, @i: 1) when (@i =< @n) {
// 	.elevation-@{i} {
// 		box-shadow: @elevation-3;
// 	}
// 	.generate-columns(@n, (@i + 1));
// }
// .generate-columns(23);

.but-card {
	&[color=light]{
		color: @light-text-primary;
		background-color: @light-background;
	}
	&[color=dark] {
		color: @dark-text-primary;
		background-color: @dark-background;
	}
}

.box {
	position: relative;
	left: 30px;
	top: 20px;
}
</style>