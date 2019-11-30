# 导航抽屉
导航抽屉从左侧滑入，其中包含应用程序的导航目标。

注意,导航抽屉的父元素只能是 &lt;el-container&gt;;
建议将其放置在根&lt;el-container&gt;容器下,因为在modal状态下将占据整个屏幕.

## 基础用法

```vue
<template>
<but-container>
	<but-nav-drawer @close="opens" :open="open">
		<but-nav-list>
			<but-nav-list-item>Item</but-nav-list-item>
			<but-nav-list-item>Item</but-nav-list-item>
			<but-nav-list-item>Item</but-nav-list-item>
		</but-nav-list>
	</but-nav-drawer>

	<but-container>
		<but-header>Header</but-header>
		<but-body class="navdrawer">
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
.navdrawer {
	line-height: 600px;
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