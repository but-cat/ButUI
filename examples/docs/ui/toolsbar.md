# 卡片
卡片是内容容器,你可以将信息,表单和媒体等内容元素整合在卡片容器中展示。

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




### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型 | String| — | — |