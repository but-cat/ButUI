<template>
  <header class="but-header" :style="{height: (typeof this.height == 'string') ? this.height : `${this.height}px`}">
    <slot></slot>
  </header>
</template>

<script>
export default {
	name: 'ButHeader',
	props: {
		height: {
			type: [String, Number],
			default: '60px'
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