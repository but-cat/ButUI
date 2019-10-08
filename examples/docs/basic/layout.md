# 栅格布局
这是一个基于 Vue 2.0 的桌面端组件库

## 项目设置
```vue
<template>
<but-row>
	<but-col :col="col" style="background-color: #39c5bb;">???</but-col>
	<but-col :col="col" style="background-color: #66ccff;">???</but-col>
	<but-col :col="col" style="background-color: #39c5bb;">???</but-col>
	<but-col :col="col" style="background-color: #66ccff;">???</but-col>
	<but-col :col="col" style="background-color: #39c5bb;">???</but-col>
	<but-col :col="col" style="background-color: #66ccff;">???</but-col>
</but-row>
</template>
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
