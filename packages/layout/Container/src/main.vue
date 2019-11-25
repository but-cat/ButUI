<template>
<section class="but-container" :class="'but-'+isVertical">
	<slot/>
</section>
</template>

<script>
export default {
	name: 'ButContainer',
	props: {
		direction: String
	},
	computed: {
		isVertical() {
			if (this.direction === 'vertical') {
				return 'vertical';
			} else if (this.direction === 'horizontal') {
				return 'horizontal';
			} else return this.$slots && this.$slots.default.some(vnode => {				// 如果direction没有输入或配置错误,则根据子组件分配布局轴向
				return ['but-aside', 'but-drawer']
					.some(item => vnode.componentOptions.tag === item);
			}) ? 'horizontal' : 'vertical';
		}
	}
};
</script>


<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-container {
    display: flex;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
	min-width: 0;
	overflow: hidden;
	
	position: relative;
}

.but-vertical {
	flex-direction: column;
}
.but-horizontal {
	flex-direction: row;
}
</style>