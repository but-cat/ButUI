# 轮播组件

```vue
<template>
<div style="height: 150px">
	<but-carousel :max="6" height="100%">
		<but-carousel-item v-for="item in 6" :key="item">
			<div class='carousel-item'>
				<h3>{{ item }}</h3>
			</div>
		</but-carousel-item>
	</but-carousel>
</div>
</template>

<style lang="less" scoped>
.carousel-item {
	width: 100%;
	height: 100%;
	display: table;

	h3{
		font-size: 20px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
}
</style>
```



```vue
<template>
<div style="height: 150px">
	<but-carousel :max="4" height="100%">
		<but-carousel-item v-for="item in 4" :key="item">
			<but-image :src="source" shape="rounded"/>
		</but-carousel-item>
	</but-carousel>
</div>
</template>
<script>
export default {
	data() {
		return {
			source: require('@/assets/image/65040104_p0.jpg')
		};
	},
};
</script>
```