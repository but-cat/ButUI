# 工具栏
工具栏是一系列包含列表,图形按钮和菜单的选项组合,并将其整合在一个条状视觉元素中

## 基础用法

```vue
<template>
<but-container>
	<but-header height="50px">
		<but-toolsbar>
			<but-toolsbar-list>
				<but-toolsbar-btn :icon="require('./../../assets/logo.png')"/>
				<but-toolsbar-btn :icon="require('./../../assets/logo.png')"/>
				<but-toolsbar-btn :icon="require('./../../assets/logo.png')"/>
			</but-toolsbar-list>
			
			<but-toolsbar-list>
				<but-toolsbar-btn :icon="require('./../../assets/logo.png')"/>
				<but-toolsbar-btn :icon="require('./../../assets/logo.png')"/>
				<but-toolsbar-btn :icon="require('./../../assets/logo.png')"/>
			</but-toolsbar-list>
		</but-toolsbar>
	</but-header>
</but-container>
</template>
<script>
export default {
	data() {
		return {
			style: {
				borderRadius: '3px',
				border: '1px'
			}
		};
	},
	methods: {
		dark() {
			this.$color = 'light';
		}
	}
};
</script>
<style module>
.root {
	width: 200px;
	background: #eee;
}
</style>
```




### but-toolsbar-btn 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon | 图形按钮的图像url | String | — | — |