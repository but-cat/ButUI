# 三段式布局
它提供最多三个的可调整容器,适用于设计全屏应用,或是快速搭建页面的基本结构

```html
<template>
<div style="background-color: #66ccff; width: 100%; height: 130px;">
	<but-sandwich>
		<div slot="head" style="background-color: #39c5bb;">???</div>
		<div style="background-color: #66ccff;">???</div>
		<div slot="tail" style="background-color: #dfdfdf;">???</div>
	</but-sandwich>
	</template>
</div>
<script>
export default {
	data() {
		return {
			col: {
				xs: 1,
				md: 2
			},
		};
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
| type | 类型 | String| — | — |