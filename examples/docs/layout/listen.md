# 重绘监听容器
该容器监听默认占据了父级元素的全部空间,并且在发生重绘时抛出事件.

> 在基于canvas,SVG等元素开发插件时,此类元素绘制需要以一个固定的高宽比来确定画布的大小,如果使用CSS指定其样式则会导致拉伸.
> 该容器可以抛出重绘事件和当前容器的高宽,用于对此类元素的重绘刷新.

```vue
<template>
	<but-sandwich :head="300">
		<but-listen @resize="resizeOut" style="background-color: #39c5bb;">容器的宽度为{{width}}px,高度为{{height}}px</but-listen>
	</but-sandwich>
</template>
<script>
export default {
	data() {
		return {
			head: 300,
			width: 0,
			height: 0
		}
	},
	methods: {
		resizeOut(width, height) {
			console.log(width, height);
			this.width = width;
			this.height = height;
		}
	}
};
</script>
```





### 可供监听的事件
| 事件名    | 说明    | 抛出参数    |
|---------- |-------- |---------- |
| resize | 用于抛出容器重绘的事件,并传递容器的尺寸 | width, height |