<template>
<div class="but-menu-item" @click="handleClick">
	<slot/>
</div>
</template>

<script>
import ripples from "../../../core/effects/ripples"

export default {
	name: "butMenuItem",
	methods: {
		handleClick(event) {
			if(!this.disabled){
				this.$emit('click', event);
				ripples(event, "var(--backgroundVariant)");
			}
		},
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-menu-item {
	width: 100%;
	height: 36px;
	color: @text-primary;
	font-size: 19.2px;
	cursor: pointer;
	user-select: none;

	position: relative;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		// background-color: @primary;
		background-color: rgba(123, 146, 146, 0.178);
		transition: .12s;
	}
}
</style>