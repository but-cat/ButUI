# 三段式布局
该布局组件将在一片空间内划分出多三个的可调整容器,适用于设计全屏应用,或是快速搭建页面的基本结构

>它可以划分出三块可调整的容器,用于设计全屏应用


```vue
<template>
<div style="height: 360px;">
	<but-sandwich :head="head" @head="headSize" :tail="tail" @tail="tailSize" >
		<div slot="head" style="background-color: #FF0000; height: 100%;">
			<h1>头部容器尺寸为{{head}}px</h1>
		</div>
		<div style="background-color: #FFF; height: 100%;">
			<h1>sandwich容器</h1>
		</div>
		<div slot="tail" style="background-color: #0000FF; height: 100%;">
			<h1>尾部容器尺寸为{{tail}}px</h1>
		</div>
	</but-sandwich>
</div>
</template>

<script>
export default {
	data() {
		return {
			head: 300,
			tail: 300
		}
	},
	methods: {
		headSize(value) {
			this.head = value;
		},
		tailSize(value) {
			this.tail = value;
		},
	}
}
</script>
```




### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型 | String| — | — |