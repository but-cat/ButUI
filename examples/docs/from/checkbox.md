# 复选框
复选框允许用户从集中选择多个选项。
复选框可接收多种v-model类型：字符串，数字，布尔值，对象和数组。

```vue
<template>
<div>
    <but-checkbox v-model="boolean">Boolean</but-checkbox>
	<but-checkbox v-model="boolean" scene="info">Boolean</but-checkbox>
	<but-checkbox v-model="boolean" scene="success">Boolean</but-checkbox>
	<but-checkbox v-model="boolean" scene="warning">Boolean</but-checkbox>
	<but-checkbox v-model="boolean" scene="danger">Boolean</but-checkbox>
	<but-checkbox v-model="boolean" :disabled="true">Boolean</but-checkbox>

	<table>
		<tr>
			<th>Boolean</th>
		</tr>

		<tr>
			<td>{{ boolean }}</td>
		</tr>
	</table>
</div>
</template>
<script>
export default {
	data: () => ({
		boolean: false
    })
};
</script>
```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 预定义的值 | Number / Object | min-max范围内的数值,或是包含min,max键值的对象 | 0 |
| scene | 情景颜色 | String | primary, success, info, warning, danger | primary |
| disabled | 禁用状态 | Boolean | true/false | false |