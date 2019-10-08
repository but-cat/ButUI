<template>
<header class="but-spring" :style="{ width, height }">
	<slot></slot>
</header>
</template>

<script>
/**
 * ButHeader 组件为视图布局提供的弹性可变容器组件
 * ---
 * @param {String} height 指定容器内项目以横向还是纵向排列: vertical 纵向排列; horizontal 横向排列
 */
export default {
	name: 'ButSpring',
	props: {
		width: {
			type: String,
			default: '300px'
		},
		height: {
			type: String,
			default: '60px'
		}
	},
	
};
</script>

<style lang="less" scoped>
.but-spring {
	padding: 0;
	box-sizing: border-box;
	flex-shrink: 0;
	background-color: aqua;
}
</style>