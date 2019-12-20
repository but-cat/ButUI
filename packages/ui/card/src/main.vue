<template>
<div :class="shadow" :style="[bodyStyle, fillets]" class="but-card">
	<slot/>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
export default {
	name: 'ButCard',
	props: {
		bodyStyle: {
			type: Object,
			default: ()=>({
				
			})
		},
		elevation: {
			type: Number,
			default: 0,
			// ...PropValidator('scene', ["primary", "success", "info", "warning", "danger"])
		},
		fillet: {
			type: Number,
			default: 0
		}
	},
	computed: {
		shadow() {
			return 'shadow-' + this.elevation;
		},
		fillets() {
			return {
				borderRadius: this.fillet + 'px'
			}
		}
	},
	provide: ()=>({
		radius: 3
	})
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-card {
	width: 100%;
	// height: 100%;
	position: relative;
	background-color: @background;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
}


</style>