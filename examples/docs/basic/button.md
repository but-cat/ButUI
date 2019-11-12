# Button 按钮
按钮用于响应一个即时操作。

## 基础用法

```html
<div>
	<but-button>默认</but-button>
	<but-button scene="primary">主要</but-button>
	<but-button scene="info">信息</but-button>
	<but-button scene="success">成功</but-button>
	<but-button scene="danger">注意</but-button>
	<but-button scene="warning">警告</but-button>
	<but-button icon="#chrome" scene="primary">图标</but-button>
</div>
```

添加属性可变更为没有背景或只有文本的平淡样式
```html
<div>
	<but-button plain>默认</but-button>
	<but-button scene="primary" type="outlined" plain="outlined">主要</but-button>
	<but-button scene="info" type="outlined" plain="outlined">信息</but-button>
	<but-button scene="success" type="outlined" plain="outlined">成功</but-button>
	<but-button scene="danger" type="outlined" plain="outlined">注意</but-button>
	<but-button scene="warning" type="outlined" plain="outlined">警告</but-button>
	<but-button icon="#chrome" type="outlined" scene="primary" plain="outlined">图标</but-button>
</div>
<div>
	<but-button plain>默认</but-button>
	<but-button scene="primary" type="text" plain="outlined">主要</but-button>
	<but-button scene="info" type="text" plain="outlined">信息</but-button>
	<but-button scene="success" type="text" plain="outlined">成功</but-button>
	<but-button scene="danger" type="text" plain="outlined">注意</but-button>
	<but-button scene="warning" type="text" plain="outlined">警告</but-button>
	<but-button icon="#chrome" type="text" scene="primary" plain="outlined">图标</but-button>
</div>
```

## 禁用
在组件上指定 disabled 属性可禁用该组件.

如果需要挂载变量,disabled只能接收Boolean类型,值为 true 的变量.
```html
<div>
	<but-button disabled>默认</but-button>
	<but-button scene="primary" disabled>主要</but-button>
	<but-button scene="info" disabled>信息</but-button>
	<but-button scene="success" disabled>成功</but-button>
	<but-button scene="danger" disabled>注意</but-button>
	<but-button scene="warning" disabled>警告</but-button>
	<but-button icon="#chrome" scene="primary" disabled>图标</but-button>
</div>
```


## 图标
组件允许指定src属性来设置一个图标

如果要使用内置的图标,请在类名前加上 '#' 标识符单独指定
```html
<div style="display: flex; align-content: center;">
	<but-button icon="#emoCry" scene="primary">图标</but-button>
</div>
```
也可以直接传入引用的图片路径或是base64
```html
<div>
	<but-button scene="primary">图标</but-button>
	<but-button icon="#emoSleep" scene="primary">图标</but-button>
	<but-button icon="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIxIDEgNTExLjk5OTc1IDUxMSIgd2lkdGg9IjUxMXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01LjIzNDM3NSA1MDcuMjYxNzE5Yy02Ljk4MDQ2OS02Ljk4MDQ2OS02Ljk4MDQ2OS0xOC4zMDA3ODEgMC0yNS4yODEyNWwzMTkuMzgyODEzLTMxOS4zODI4MTMgMjUuMjgxMjUgMjUuMjgxMjUtMzE5LjM3ODkwNyAzMTkuMzgyODEzYy02Ljk4NDM3NSA2Ljk4MDQ2OS0xOC4zMDA3ODEgNi45ODA0NjktMjUuMjg1MTU2IDB6bTAgMCIgZmlsbD0iI2RlZWNmMSIvPjxwYXRoIGQ9Im00NjguMTYwMTU2IDQ0LjMzNTkzOGMtNTguNDQ5MjE4LTU4LjQ0OTIxOS0xNTMuMjEwOTM3LTU4LjQ0OTIxOS0yMTEuNjU2MjUgMC01OC40NDkyMTggNTguNDQ1MzEyLTU4LjQ0OTIxOCAxNTMuMjA3MDMxIDAgMjExLjY1NjI1IDU4LjQ0NTMxMyA1OC40NDUzMTIgMTUzLjIwNzAzMiA1OC40NDUzMTIgMjExLjY1NjI1IDAgNTguNDQ1MzEzLTU4LjQ0OTIxOSA1OC40NDUzMTMtMTUzLjIxMDkzOCAwLTIxMS42NTYyNXptMCAwIiBmaWxsPSIjZmY5ODM4Ii8+PGcgZmlsbD0iI2ZmODcwOSI+PHBhdGggZD0ibTQ2OC4xNjQwNjIgNDQuMzMyMDMxYy0zLjg3MTA5My0zLjg3MTA5My03LjkwMjM0My03LjQ4NDM3NS0xMi4wNzAzMTItMTAuODQzNzUgNDcuMzQzNzUgNTguNzY5NTMxIDQzLjczMDQ2OSAxNDUuMDA3ODEzLTEwLjg0NzY1NiAxOTkuNTg1OTM4LTU0LjU3NDIxOSA1NC41NzgxMjUtMTQwLjgxMjUgNTguMTkxNDA2LTE5OS41ODU5MzggMTAuODQzNzUgMy4zNTkzNzUgNC4xNzE4NzUgNi45NzI2NTYgOC4yMDMxMjUgMTAuODQzNzUgMTIuMDc0MjE5IDU4LjQ0OTIxOSA1OC40NDUzMTIgMTUzLjIxMDkzOCA1OC40NDUzMTIgMjExLjY2MDE1NiAwIDU4LjQ0OTIxOS01OC40NDkyMTkgNTguNDQ5MjE5LTE1My4yMTA5MzggMC0yMTEuNjYwMTU3em0wIDAiLz48cGF0aCBkPSJtNDUzLjk2ODc1IDI3Ni4zMDg1OTRjLTgyLjEwOTM3NS02Mi45MDIzNDQtMTU0Ljg4MjgxMi0xMzUuNjY3OTY5LTIxNy43NzczNDQtMjE3Ljc4MTI1LTcuMDA3ODEyLTkuMTQ0NTMyLTUuMjE4NzUtMjIuMjQyMTg4IDQuMDE5NTMyLTI5LjEyMTA5NC4xMTMyODEtLjA4MjAzMS4yMjI2NTYtLjE2NDA2Mi4zMzU5MzctLjI0NjA5NCA5LjAxOTUzMS02LjcxNDg0NCAyMS43ODUxNTYtNC45NzY1NjIgMjguNjI1IDMuOTQ5MjE5IDYwLjcyNjU2MyA3OS4yNDYwOTQgMTMwLjk2ODc1IDE0OS40ODgyODEgMjEwLjIxMDkzNyAyMTAuMjE0ODQ0IDguOTI5Njg4IDYuODM5ODQzIDEwLjY3MTg3NiAxOS42MDU0NjkgMy45NTMxMjYgMjguNjI1LS4wODIwMzIuMTEzMjgxLS4xNjQwNjMuMjIyNjU2LS4yNS4zMzU5MzctNi44NzUgOS4yMzgyODItMTkuOTcyNjU3IDExLjAyNzM0NC0yOS4xMTcxODggNC4wMjM0Mzh6bTAgMCIvPjwvZz48L3N2Zz4=">Hello?</but-button>
</div>
```



### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| scene | 情景颜色 | String | primary, success, info, warning, danger | primary |
| type | 修改按钮样式 | String | contained, outlined, text | contained |
| disabled | 禁用该按钮 | Boolean | — | — |