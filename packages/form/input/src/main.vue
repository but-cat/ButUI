<template>
<div>
	{{value}}
	<!-- <range v-if="type" />
	<radio v-else-if="type"/>
	<inputs v-else/> -->
</div>
</template>

<script>
export default {
	name: 'ButInput',
	props: {
		type: {
			value: String,
			default: ''
		},
		value: {
			value: String,
			default: 0
		}
	},
	data() {
		return {

		}
	},
	methods: {
		input(index) {
			this.select = index;
			let value = this.value[index];
			this.$emit('input', value);
		}
	},
	components: {
		inputs: require('./input').default,
		radio: require('./radio').default,
		range: require('./range').default
	}
}
</script>

<style lang="less" scoped>

</style>