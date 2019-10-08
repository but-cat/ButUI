# 卡片
卡片是内容容器,你可以将信息,表单和媒体等内容元素整合在卡片容器中展示。

## 基础用法

```vue
<template>
<div>
	<but-card :style="style">卡片是内容容器,你可以将信息,表单和媒体等内容元素整合在卡片容器中展示。</but-card>
	<but-button click="dark" type="primary">信息</but-button>
</div>
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

