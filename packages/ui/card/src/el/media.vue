<template>
<div class="but-card-media">
	<img :src="src" :alt="alt" @onerror="notimgfound">
</div>
</template>

<script>
export default {
	name: "butCardMedia",
	props: {
		src: {
			type: String,
			default: "@/assets/image/65040104_p0.jpg"
		},
		alt: {
			type: String,
			default: "Responsive image"
		}
	},
	data:()=>({

	}),
	inject: ['radius'],
	methods: {
		notimgfound() {
			this.source = "https://www.bing.com/th?id=OHR.MauiEucalyptus_ZH-CN5616197787_1920x1080.jpg";
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../../_style/variables.less';
.but-card-media {
	// padding: 16px;
	// padding-top: 0px;
    // font-size: 14px;
	// line-height: 22px;

	width: 100%;
	padding: 0 8px;
	box-sizing: border-box;
	flex: 1;

	// 图片
	img {
		vertical-align: middle;
		width: 100%;
	}
}





// 响应图像
// 使其防止图像缩放超出其父级容器的宽度。
.img-responsive(@display: block) {
	display: @display;
	max-width: 100%;															// 第1部分：设置相对于父对象的最大值
	height: auto;																// 第2部分：根据宽度缩放高度，否则会拉伸
}

.container {
	width: 100%;
	height: auto;
	// position: relative;
	// overflow: hidden;
}
.circle-container {
	width: 100%;
	height: 0px;
	padding-bottom: 100%;
	overflow:hidden;
	margin: 0;
	position:relative;
	background: none;
}

// 自适应图像（确保图像不会超出其父级）
.responsive {
	.img-responsive(inline-block);
}
// 圆角
.rounded {
	border-radius: @border-radius-large;
	.img-responsive(inline-block);
}
</style>