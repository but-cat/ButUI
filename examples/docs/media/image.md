# 图片
在文档和示例中插入具有响应行为的图像，可以选择向props添加轻量级样式。

## 基础用法

```vue
<template>
<but-row :gutter="10">
	<but-col :xs="3"><div class="img-purple">
		<but-image :src="source" shape="responsive"/>
	</div></but-col>
	<but-col :xs="3"><div class="img-purple">
		<but-image :src="source" shape="thumbnail"/>
	</div></but-col>
	<but-col :xs="3"><div class="img-purple">
		<but-image :src="source" shape="rounded"/>
	</div></but-col>
	<but-col :xs="3"><div class="img-purple">
		<but-image :src="source" shape="circle"/>
	</div></but-col>
</but-row>
</template>
<script>
export default {
	data() {
		return {
			col: {
				xs: 3
			},
			source: require('@/assets/image/65040104_p0.jpg')
		};
	},
};
</script>
<style lang="less" scoped>
.img-purple {
	border-radius: 4px;
	min-height: 36px;
}
</style>
```




### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| src | 资源地址 | Source | — | — |
| alt | 图片加载失败时的代替文本 | String | — | Responsive image |
| shape | 显示样式 | String | responsive, thumbnail, rounded, circle | responsive |