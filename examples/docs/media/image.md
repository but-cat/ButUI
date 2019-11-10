# 图片

# 卡片
卡片是内容容器,你可以将信息,表单和媒体等内容元素整合在卡片容器中展示。

## 基础用法

```vue
<template>
	<but-image :src="source" />
</template>
<script>
export default {
	data() {
		return {
			source: require('@/assets/image/65040104_p0.jpg')
		};
	},
	methods: {
		dark() {
			this.$color = 'light';
		}
	},
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
| src | 资源地址 | Source | — | — |
| alt | 图片加载失败时的代替文本 | String | — | Responsive image |
| shape | 显示样式 | String | responsive, thumbnail, rounded, circle | responsive |