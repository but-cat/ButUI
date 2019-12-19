<template>
<div class="but-title">
	<slot/><br>
	<slot class="small" name="small"/>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
export default {
	name: 'ButTitle',
	props: {
		scene: {
			default: "primary",
			...PropValidator('scene', ["primary", "success", "info", "warning", "danger"])
		},
		size: {
			value: Number,
			default: 24,
		}
	}
}
</script>

<style lang="less" scoped>
.but-title {
	font-size: 24px;
    letter-spacing: 0;
	line-height: 32px;
	
	.small {
		opacity: .54;
		font-size: 60%;
		letter-spacing: .01em;
		line-height: 20px;
	}
	small {
		.small
	}
}
</style>