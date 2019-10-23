# 树形控件
用于展示和操作具有层级结构的数据,如对象结构和文件夹等.

```vue
<template>
	<but-tree :data="data" :icon="icon"/>
</template>
<script>
	export default {
		data() {
			return {
				data: [
					{
						name: '香蕉',
						type: 'fruit',
						icon: 'icon',
						children: [
							{
								name: '梨',
								type: 'fruit',
								icon: 'icon'
							},
							{
								name: '香蕉',
								type: 'fruit',
								icon: 'icon',
								children: [
									{
										name: '梨',
										type: 'fruit',
										icon: 'icon'
									}
								]
							},
							{
								name: '香蕉',
								type: 'fruit',
								icon: 'icon'
							}
						]
					},
					{
						name: '香蕉',
						type: 'fruit',
						icon: 'icon'
					}
				],
				icon: {
					iconKey: 'icon',
					iconFilter: {
						icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIxIDEgNTExLjk5OTc1IDUxMSIgd2lkdGg9IjUxMXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01LjIzNDM3NSA1MDcuMjYxNzE5Yy02Ljk4MDQ2OS02Ljk4MDQ2OS02Ljk4MDQ2OS0xOC4zMDA3ODEgMC0yNS4yODEyNWwzMTkuMzgyODEzLTMxOS4zODI4MTMgMjUuMjgxMjUgMjUuMjgxMjUtMzE5LjM3ODkwNyAzMTkuMzgyODEzYy02Ljk4NDM3NSA2Ljk4MDQ2OS0xOC4zMDA3ODEgNi45ODA0NjktMjUuMjg1MTU2IDB6bTAgMCIgZmlsbD0iI2RlZWNmMSIvPjxwYXRoIGQ9Im00NjguMTYwMTU2IDQ0LjMzNTkzOGMtNTguNDQ5MjE4LTU4LjQ0OTIxOS0xNTMuMjEwOTM3LTU4LjQ0OTIxOS0yMTEuNjU2MjUgMC01OC40NDkyMTggNTguNDQ1MzEyLTU4LjQ0OTIxOCAxNTMuMjA3MDMxIDAgMjExLjY1NjI1IDU4LjQ0NTMxMyA1OC40NDUzMTIgMTUzLjIwNzAzMiA1OC40NDUzMTIgMjExLjY1NjI1IDAgNTguNDQ1MzEzLTU4LjQ0OTIxOSA1OC40NDUzMTMtMTUzLjIxMDkzOCAwLTIxMS42NTYyNXptMCAwIiBmaWxsPSIjZmY5ODM4Ii8+PGcgZmlsbD0iI2ZmODcwOSI+PHBhdGggZD0ibTQ2OC4xNjQwNjIgNDQuMzMyMDMxYy0zLjg3MTA5My0zLjg3MTA5My03LjkwMjM0My03LjQ4NDM3NS0xMi4wNzAzMTItMTAuODQzNzUgNDcuMzQzNzUgNTguNzY5NTMxIDQzLjczMDQ2OSAxNDUuMDA3ODEzLTEwLjg0NzY1NiAxOTkuNTg1OTM4LTU0LjU3NDIxOSA1NC41NzgxMjUtMTQwLjgxMjUgNTguMTkxNDA2LTE5OS41ODU5MzggMTAuODQzNzUgMy4zNTkzNzUgNC4xNzE4NzUgNi45NzI2NTYgOC4yMDMxMjUgMTAuODQzNzUgMTIuMDc0MjE5IDU4LjQ0OTIxOSA1OC40NDUzMTIgMTUzLjIxMDkzOCA1OC40NDUzMTIgMjExLjY2MDE1NiAwIDU4LjQ0OTIxOS01OC40NDkyMTkgNTguNDQ5MjE5LTE1My4yMTA5MzggMC0yMTEuNjYwMTU3em0wIDAiLz48cGF0aCBkPSJtNDUzLjk2ODc1IDI3Ni4zMDg1OTRjLTgyLjEwOTM3NS02Mi45MDIzNDQtMTU0Ljg4MjgxMi0xMzUuNjY3OTY5LTIxNy43NzczNDQtMjE3Ljc4MTI1LTcuMDA3ODEyLTkuMTQ0NTMyLTUuMjE4NzUtMjIuMjQyMTg4IDQuMDE5NTMyLTI5LjEyMTA5NC4xMTMyODEtLjA4MjAzMS4yMjI2NTYtLjE2NDA2Mi4zMzU5MzctLjI0NjA5NCA5LjAxOTUzMS02LjcxNDg0NCAyMS43ODUxNTYtNC45NzY1NjIgMjguNjI1IDMuOTQ5MjE5IDYwLjcyNjU2MyA3OS4yNDYwOTQgMTMwLjk2ODc1IDE0OS40ODgyODEgMjEwLjIxMDkzNyAyMTAuMjE0ODQ0IDguOTI5Njg4IDYuODM5ODQzIDEwLjY3MTg3NiAxOS42MDU0NjkgMy45NTMxMjYgMjguNjI1LS4wODIwMzIuMTEzMjgxLS4xNjQwNjMuMjIyNjU2LS4yNS4zMzU5MzctNi44NzUgOS4yMzgyODItMTkuOTcyNjU3IDExLjAyNzM0NC0yOS4xMTcxODggNC4wMjM0Mzh6bTAgMCIvPjwvZz48L3N2Zz4='
					}
				}
			};
		},
		methods: {
			dark() {
				this.$color = 'light';
			}
		}
	};
</script>
```





### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data | 展示数据 | Object/Array | — | — |
| nameKey | 设置节点名的键值 | String | — | name |
| childrenKey | 设置用于迭代子级对象的键值 | String | — | — |
| icon | 设置类型图标 | Object | — | — |
| size | 设置大小 | Object | small/medium | small |