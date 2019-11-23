<template>
<section class="but-container" :class="isVertical">
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
			} else return this.$slots && this.$slots.default ? this.$slots.default.some(vnode => {
				const tag = vnode.componentOptions && vnode.componentOptions.tag;
				return tag === 'but-header' || tag === 'but-footer';
			}) : false;
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
}

.but-vertical {
	flex-direction: column;
}
.but-horizontal {
	flex-direction: row;
}
</style>