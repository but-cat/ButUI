# 导航条
为网站提供导航功能的菜单。

## 基础用法

```vue
<template>
<div style="width: 100%; height: 42px;">
	<but-nav-menu>
		<but-nav-menu-item>首页</but-nav-menu-item>
		<but-nav-menu-item disabled>消息</but-nav-menu-item>
		<but-nav-menu-item>个人中心</but-nav-menu-item>
	</but-nav-menu>
</div>
</template>

<script>
export default {
	data: ()=>({

	}),
};
</script>
```




### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型 | String| — | — |