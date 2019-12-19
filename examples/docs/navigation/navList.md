# 导航列表
安置在导航抽屉中的按钮元素。

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
| name | 标签名称 | String | — | — |
| activated | 激活状态 | Boolean | true/false | false |
| icon | 图标url | String | — | — |