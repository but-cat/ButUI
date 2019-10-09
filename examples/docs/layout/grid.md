# 栅格布局
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局容器中。
+ &lt;but-row&gt;: 行级容器,用于容纳column项目创建布局系统
+ &lt;but-col&gt;: 列成员,用于划分每格栅格组件

## 基础布局
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
