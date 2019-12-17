# 开关
一个基本switch组件,用于指示开关状态

```vue
<template>
<div>
	<but-switch v-model="data"/>
	<but-switch v-model="data" scene="info"/>
	<but-switch v-model="data" scene="success"/>
	<but-switch v-model="data" scene="warning"/>
	<but-switch v-model="data" scene="danger"/>
	<but-switch v-model="data" :disabled="true"/>
	<h3>{{data}}</h3>
</div>
</template>
<script>
export default {
	data() {
		return {
			data: false
		};
	}
};
</script>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 预定义的值 | Boolean | true/false | false |
| scene | 情景颜色 | String | primary, success, info, warning, danger | primary |
| disabled | 禁用状态 | Boolean | true/false | false |