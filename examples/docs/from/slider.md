# slider
一个基本滑动条组件

```vue
<template>
<div>
	<but-slider v-model="data" :min="0" :max="100" :scale="scale"/>
	<h3>{{data}}</h3>
</div>
</template>
<script>
export default {
	data() {
		return {
			data: 39,
			scale: {
				width: 2,									// 刻度线宽
				color: "#39c5bb"
			}
		}
	},
	methods: {
		dark() {
			this.$color = 'light';
		}
	}
};
</script>
```

```vue
<template>
<div>
	<but-slider v-model="data" :min="0" :max="100"/>
	<h3>{{data}}</h3>
</div>
</template>
<script>
export default {
	data() {
		return {
			data: {
				min: 20,
				max: 60
			}
		}
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
| value | 预定义的值 | Number / Object | min-max范围内的数值,或是包含min,max键值的对象 | 0 |
| min | 最小值 | Number | — | — |
| max | 最大值 | Number | — | — |