# input
一个基本input组件

```vue
<template>
	<but-input :value="data"/>
</template>
<script>
export default {
	data() {
		return {
			data: '???'
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