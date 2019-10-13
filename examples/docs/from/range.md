# range
一个基本滑动条组件

```vue
<template>
	<but-range v-model="data" :min="0" :max="100"/>
</template>
<script>
export default {
	data() {
		return {
			data: 39
		}
	},
	methods: {
		dark() {
			this.$color = 'light';
		}
	}
};
</script>
```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 预定义的值 | Number| — | — |
| min | 最小值 | Number | — | — |
| max | 最大值 | Number | — | — |