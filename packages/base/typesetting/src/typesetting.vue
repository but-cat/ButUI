<template>
	<div class="typesetting"><slot/></div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
export default {
	name: 'ButTypesetting',
	props: {
		scene: {
			default: "primary",
			...PropValidator('scene', ["primary", "success", "info", "warning", "danger"])
		},
	}
}
</script>

<style lang="less" scoped>

</style>