# 情景
在交互过程中,通常会产生一些常见情景(如:信息, 通过, 警告, 错误),butUI提供了这些情景下所需的配色及图标。

## 图标

```vue
<template>
<but-row :gutter="10">
	<but-col :xs="3"><div class="img-purple">
		<scene-icon type="info"/>
	</div></but-col>
	<but-col :xs="3"><div class="img-purple">
		<scene-icon type="pass"/>
	</div></but-col>
	<but-col :xs="3"><div class="img-purple">
		<scene-icon type="warning"/>
	</div></but-col>
	<but-col :xs="3"><div class="img-purple">
		<scene-icon type="error"/>
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
	min-height: 360px;
}
</style>
```
## 创建图标
butUI提供了一个全局函数用于创建这些图标;该函数默认返回一个base64编码的矢量图.

```JavaScript
Vue.$sceneIcon("info-sm", "#FFF");
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 图标名 | String | terrort, terror-smt, tinfot, tinfo-smt, tpasst, tpass-smt, twarningt, twarning-smt | — |
| alt | 图片加载失败时的代替文本 | String | — | Responsive image |
| shape | 显示样式 | String | responsive, thumbnail, rounded, circle | responsive |