# 栅格布局
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局容器中。
+ &lt;but-row&gt;: 行级容器,用于容纳column项目创建布局系统
+ &lt;but-col&gt;: 列成员,用于划分每格栅格组件

## 基础布局
```vue
<template>
<but-row>
	<but-col :col="col"><div class="grid-content bg-purple-light"></div></but-col>
	<but-col :col="col"><div class="grid-content bg-purple"></div></but-col>
	<but-col :col="col"><div class="grid-content bg-purple-light"></div></but-col>
	<but-col :col="col"><div class="grid-content bg-purple"></div></but-col>
	<but-col :col="col"><div class="grid-content bg-purple-light"></div></but-col>
	<but-col :col="col"><div class="grid-content bg-purple"></div></but-col>
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
<style>
.but-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.but-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
```



### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型 | String| — | — |