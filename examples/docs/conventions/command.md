# 全局指令
butUI提供了一些用于该框架以及一些常用的全局指令.

## V-binds 双向绑定指令
在组件上创建双向绑定,绑定的值和监听的方法都是V-binds接收的参数,参数不可以是表达式。
(其实就是v-model的变种)

```vue
<template>
<div>
	<input v-model="message">
	<butcat v-binds:duang="message"/>
</div>
</template>
<script>
export default {
	data() {
		return {
			message: 10086
		};
	}
};
</script>
```

# V-shadow 海拔阴影
butUI创建了1-24等级的阴影,可通过V-shadow指令快速指定

```vue
<template>
	<div v-shadow="5" class="grid-content bg-purple"/>
</template>
<style>
.content-bar {
	border-radius: 4px;
	min-height: 36px;
	background: #d3dce6;
}
</style>
```