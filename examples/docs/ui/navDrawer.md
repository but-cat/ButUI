# 导航抽屉
导航抽屉从左侧滑入，其中包含应用程序的导航目标。

注意,导航抽屉的父元素必须也只能是 &lt;el-container&gt;

## 基础用法

```vue
<template>
<but-container>
	<but-nav-drawer @close="opens" :open="open">Aside</but-nav-drawer>
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
.but-drawer {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 200px;
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