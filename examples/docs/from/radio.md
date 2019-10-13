# radio
一个基本radio组件

```vue
<template>
	<but-radio :value="data"/>
</template>
<script>
export default {
	data() {
		return {
			data: [
				'male',
				'female'
			],
		};
	},
	methods: {
		dark() {
			this.$color = 'light';
		}
	}
};
</script>
```