# 布局容器
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局容器中。
+ &lt;but-row&gt;: 行级容器,用于容纳column项目创建布局系统
+ &lt;but-col&gt;: 列成员,用于划分每格栅格组件

```vue 
<template>
<but-container>
	<but-aside width="200px" class="dem-aside">Aside</but-aside>
	<but-container>
		<but-header class="dem-header">Header</but-header>
		<but-body class="dem-body">Main</but-body>
	</but-container>
</but-container>
</template>
<style>
.dem-header, .dem-footer {
	background-color: #B3C0D1;
	color: #333;
	text-align: center;
	height: 100%;
}

.dem-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
}

.dem-body {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
	height: 820px;
	padding: 200px 0;
}
</style>
```

## 抽屉侧边栏
抽屉侧边栏允许用户同时访问抽屉内容和应用程序内容。它们通常与应用程序内容共面，并且会影响屏幕的布局网格。
而在小屏幕下,抽屉侧边栏将会退化为模态抽屉栏，它使用稀松布局来阻止用户与应用程序其余内容的交互。它们位于大多数元素之上，不影响屏幕的布局网格。

在使用该组件时,需要你指定一个modal属性来控制该组件是否处于模态状态。

```vue 
<template>
<but-container>
	<but-drawer width="200px" class="dem-drawer" @close="opens" :open="open">Aside</but-drawer>
	<but-container>
		<but-header>Header</but-header>
		<but-body>
			<but-button @click="opens">drawer</but-button>
		</but-body>
	</but-container>
</but-container>
</template>
<script>
export default {
	data() {
		return {
			open: true
		};
	},
	methods: {
		opens() {
			this.open = !this.open;
		}
	}
};
</script>
<style>
.dem-drawer {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	height: 200px;
}
</style>
```