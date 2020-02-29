# 导航抽屉
导航抽屉从左侧滑入，其中包含应用程序的导航目标。

注意,导航抽屉的父元素只能是 &lt;but-container&gt;;
建议将其放置在根&lt;but-container&gt;容器下,因为在modal状态下将占据整个屏幕.

## 基础用法

```vue
<template>
<but-container>
	<but-nav-drawer @close="opens" :open="open" title="标题" subtext="副标题" class="dem-aside"
	 :src="require('./../../assets/logo.png')" :background="require('./../../assets/logo.png')">
		<but-nav-list-item :src="source">Item</but-nav-list-item>
		<but-nav-list-item :src="source">Item</but-nav-list-item>
		<but-nav-list-item :src="source" :disabled="true">Item</but-nav-list-item>

		<but-nav-list-item :src="source" slot="menu">Item</but-nav-list-item>
	</but-nav-drawer>

	<but-container>
		<but-header class="dem-header">Header</but-header>
		<but-body class="dem-body">
			<but-button @click="opens">drawer</but-button>
		</but-body>
	</but-container>
</but-container>
</template>
<script>
export default {
	data() {
		return {
			open: true,
			source: require('@/assets/image/pictures.svg')
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
.navdrawer {
	/* line-height: 600px; */
}
</style>
```




### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width | 导航抽屉宽度 | String/Number | 256 | 256px |
| open | 导航抽屉开启状态 | Boolean | true/false | false |
| modal | 布局形式 | String | none, open, sm, md, lg | open |

### 事件
| 参数      | 说明    | 抛出参数      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| close | 模态窗/窗口关闭请求 | — | — | — |


## 题头信息
安置再导航抽屉中的题头组件,通常用于展示用户信息

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | String | — | — |
| subtext | 简介 | String | — | — |
| img | 图像(头像)url | String | — | — |
| background | 背景url | String | — | — |


## 导航列表
安置在导航抽屉中的按钮元素。

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name | 标签名称 | String | — | — |
| activated | 激活状态 | Boolean | true/false | false |
| icon | 图标url | String | — | — |