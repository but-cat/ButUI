<template>
	<section class="but-view" :class="{ 'is-vertical': isVertical }">
		<slot></slot>
	</section>
</template>
<script>
/**
 * ButView 组件为视图布局提供的容器组件
 * ---
 * @param {String} direction 指定容器内项目以横向还是纵向排列: vertical 纵向排列; horizontal 横向排列
 */
export default {
	name: 'ButView',
	// componentName: 'ElView',
	props: {
		direction: {
			type: String,
			default: 'vertical'
		},
	},

	computed: {
		isVertical() {
			if (this.direction === 'vertical') {
				return true;
			} else if (this.direction === 'horizontal') {
				return false;
			}
			return this.$slots && this.$slots.default
				? this.$slots.default.some(vnode => {
				const tag = vnode.componentOptions && vnode.componentOptions.tag;
				return tag === 'el-header' || tag === 'el-footer';
			})
			: false;
		}
	}
};
</script>

<style lang="less" scoped>
// @import url('');
.but-view {
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	min-width: 0;

	background-color: blueviolet;
}

.but-container {
  // IE11 supports the <main> element partially https://caniuse.com/#search=main
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 0;
}
</style>