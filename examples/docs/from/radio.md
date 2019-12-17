# 单选框
一个基本radio组件,可从一组数据中单独选中其中一种

```vue
<template>
	<but-radio :value="data"/>
	<!-- <but-radio :value="data" scene="info"/>
	<but-radio :value="data" scene="success"/>
	<but-radio :value="data" scene="warning"/>
	<but-radio :value="data" scene="danger"/> -->
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