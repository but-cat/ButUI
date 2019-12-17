# 输入框
一个基本input组件,可用于录入文本信息
文本字段允许用户在表单中输入信息，编辑和选择文本。但它们可以用在任何地方，例如对话框和搜索栏。

```vue
<template>
<div>
	<but-input v-model="data" placeholder="请输入内容"/>
	<but-input v-model="data" placeholder="请输入内容" scene="info"/>
	<but-input v-model="data" placeholder="请输入内容" scene="success"/>
	<but-input v-model="data" placeholder="请输入内容" scene="warning"/>
	<but-input v-model="data" placeholder="请输入内容" scene="danger"/>
	<but-input v-model="data" placeholder="请输入内容" :disabled="true"/>
</div>
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

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 预定义的值 | Number| — | — |
| placeholder | 描述输入字段预期值的提示信息 | String | — | — |