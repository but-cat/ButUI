# switch
一个基本switch组件,用于指示开关状态

```vue
<template>
<div>
	<but-switch v-model="data"/>
	<h3>{{data}}</h3>
</div>
</template>
<script>
export default {
	data() {
		return {
			data: false
		};
	}
};
</script>
```