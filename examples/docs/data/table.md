# 表格
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

```vue
<template>
	<but-table :fields="fields" :data="data"/>
</template>
<script>
export default {
	data() {
		return {
			fields: [
				{
					key: 'age',
					label: '值',
					sortable: true
				},
				{
					key: 'first_name',
					label: 'first',
					sortable: true
				},
				{
					key: 'last_name',
					label: '列表名',
					sortable: true
				}
			],
			data: [
				{
					isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'
				},
				{
					isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'
				},
				{
					isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'
				},
				{
					isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'
				},
				{
					isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'
				},
			]
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


## 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data | 显示的数据 | Array | — | — |
| fields | 字段名称数组或字段定义对象的数组 | String | — | — |