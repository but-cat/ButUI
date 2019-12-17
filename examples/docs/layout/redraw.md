# 重绘监听容器
该容器监听默认占据了父级元素的全部空间,并且在发生重绘时抛出事件.

> 在基于canvas,SVG等元素开发插件时,此类元素绘制需要以一个固定的高宽比来确定画布的大小,如果使用CSS指定其样式则会导致画面拉伸.
> 该容器可以抛出重绘事件和当前容器的高宽,用于对此类元素的重绘刷新.

```vue
<template>
	<div style="height: 360px;">
		<but-redraw @resize="resizeOut" style="background-color: #99a9bf;">
			<h1>容器的宽度为{{width}}px</h1>
			<h1>高度为{{height}}px</h1>
		</but-redraw>
	</div>
</template>
<script>
export default {
	data() {
		return {
			width: 0,
			height: 0
		}
	},
	methods: {
		resizeOut(width, height) {
			this.width = width;
			this.height = height;
		}
	}
};
</script>
```

### 存在的问题
由于小数精度等问题,该容器抛出的参数通常存在1px的误差,当CSS样式设置为 "overflow: auto;" 时容器会出现滑动条闪烁.请酌情处理



### 可供监听的事件
| 事件名    | 说明    | 抛出参数    |
|---------- |-------- |---------- |
| resize | 用于抛出容器重绘的事件,并传递容器的尺寸 | width, height |