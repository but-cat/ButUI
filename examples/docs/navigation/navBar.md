# 导航列表
安置在导航抽屉中的按钮元素。

## 基础用法

```vue
<template>
<but-container class="navBars">
<div class="navBarsItem">
	<but-nav-bar logoSrc="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIxIDEgNTExLjk5OTc1IDUxMSIgd2lkdGg9IjUxMXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01LjIzNDM3NSA1MDcuMjYxNzE5Yy02Ljk4MDQ2OS02Ljk4MDQ2OS02Ljk4MDQ2OS0xOC4zMDA3ODEgMC0yNS4yODEyNWwzMTkuMzgyODEzLTMxOS4zODI4MTMgMjUuMjgxMjUgMjUuMjgxMjUtMzE5LjM3ODkwNyAzMTkuMzgyODEzYy02Ljk4NDM3NSA2Ljk4MDQ2OS0xOC4zMDA3ODEgNi45ODA0NjktMjUuMjg1MTU2IDB6bTAgMCIgZmlsbD0iI2RlZWNmMSIvPjxwYXRoIGQ9Im00NjguMTYwMTU2IDQ0LjMzNTkzOGMtNTguNDQ5MjE4LTU4LjQ0OTIxOS0xNTMuMjEwOTM3LTU4LjQ0OTIxOS0yMTEuNjU2MjUgMC01OC40NDkyMTggNTguNDQ1MzEyLTU4LjQ0OTIxOCAxNTMuMjA3MDMxIDAgMjExLjY1NjI1IDU4LjQ0NTMxMyA1OC40NDUzMTIgMTUzLjIwNzAzMiA1OC40NDUzMTIgMjExLjY1NjI1IDAgNTguNDQ1MzEzLTU4LjQ0OTIxOSA1OC40NDUzMTMtMTUzLjIxMDkzOCAwLTIxMS42NTYyNXptMCAwIiBmaWxsPSIjZmY5ODM4Ii8+PGcgZmlsbD0iI2ZmODcwOSI+PHBhdGggZD0ibTQ2OC4xNjQwNjIgNDQuMzMyMDMxYy0zLjg3MTA5My0zLjg3MTA5My03LjkwMjM0My03LjQ4NDM3NS0xMi4wNzAzMTItMTAuODQzNzUgNDcuMzQzNzUgNTguNzY5NTMxIDQzLjczMDQ2OSAxNDUuMDA3ODEzLTEwLjg0NzY1NiAxOTkuNTg1OTM4LTU0LjU3NDIxOSA1NC41NzgxMjUtMTQwLjgxMjUgNTguMTkxNDA2LTE5OS41ODU5MzggMTAuODQzNzUgMy4zNTkzNzUgNC4xNzE4NzUgNi45NzI2NTYgOC4yMDMxMjUgMTAuODQzNzUgMTIuMDc0MjE5IDU4LjQ0OTIxOSA1OC40NDUzMTIgMTUzLjIxMDkzOCA1OC40NDUzMTIgMjExLjY2MDE1NiAwIDU4LjQ0OTIxOS01OC40NDkyMTkgNTguNDQ5MjE5LTE1My4yMTA5MzggMC0yMTEuNjYwMTU3em0wIDAiLz48cGF0aCBkPSJtNDUzLjk2ODc1IDI3Ni4zMDg1OTRjLTgyLjEwOTM3NS02Mi45MDIzNDQtMTU0Ljg4MjgxMi0xMzUuNjY3OTY5LTIxNy43NzczNDQtMjE3Ljc4MTI1LTcuMDA3ODEyLTkuMTQ0NTMyLTUuMjE4NzUtMjIuMjQyMTg4IDQuMDE5NTMyLTI5LjEyMTA5NC4xMTMyODEtLjA4MjAzMS4yMjI2NTYtLjE2NDA2Mi4zMzU5MzctLjI0NjA5NCA5LjAxOTUzMS02LjcxNDg0NCAyMS43ODUxNTYtNC45NzY1NjIgMjguNjI1IDMuOTQ5MjE5IDYwLjcyNjU2MyA3OS4yNDYwOTQgMTMwLjk2ODc1IDE0OS40ODgyODEgMjEwLjIxMDkzNyAyMTAuMjE0ODQ0IDguOTI5Njg4IDYuODM5ODQzIDEwLjY3MTg3NiAxOS42MDU0NjkgMy45NTMxMjYgMjguNjI1LS4wODIwMzIuMTEzMjgxLS4xNjQwNjMuMjIyNjU2LS4yNS4zMzU5MzctNi44NzUgOS4yMzgyODItMTkuOTcyNjU3IDExLjAyNzM0NC0yOS4xMTcxODggNC4wMjM0Mzh6bTAgMCIvPjwvZz48L3N2Zz4=" :elevation="5" fillet="5">
		<but-nav-link>首页</but-nav-link>
		<but-nav-link>工具</but-nav-link>
		<but-nav-link>程序</but-nav-link>

		<div slot="menu">
			<but-nav-search v-model="search" placeholder="搜素.."/>
		</div>
	</but-nav-bar>
</div>
</but-container>
</template>

<script>
export default {
	data() {
		return {
			search: ""
		};
	},
};
</script>

<style>
.navBars {
	height: 300px;
	overflow: auto;
}
.navBarsItem {
	height: 900px;
}
</style>
```

### navLink组件
导航条内提供了navLink组件作为链接按钮,与正常的a元素用法别无二致

```vue
<but-nav-link>首页</but-nav-link>
```

### but-nav-bar 组件
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| logoSrc | logo资源地址 | String | — | — |
| position | 定位,true为相对于屏幕,false相对于父级容器 | Boolean | true/false | false |
| response | logo资源地址 | String | — | — |
| hide | 隐藏导航条 | Boolean | true/false | false |

#### 可供插入的slot
| 名称      | 说明    | 
|---------- |-------- |
| nav | 左侧靠近logo的slot块 |
| menu | 右侧slot块 |

### but-nav-link 组件
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href | logo资源地址 | String | — | — |
| activated | 激活状态 | Boolean | true/false | false |