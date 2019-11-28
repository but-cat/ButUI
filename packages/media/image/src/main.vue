<template>
<div :class="[shape=='circle' ? 'circle-container' : 'container']">
	<img :src="source" :alt="alt" @error="notimgfound" :class="shape"/>
</div>
</template>

<script>
export default {
	name: 'ButImage',
	props: {
		src: {
			type: String,
			default: "@/assets/image/65040104_p0.jpg"
		},
		alt: {
			type: String,
			default: "Responsive image"
		},
		shape: {
			validator: function (value) {										// 样式类型 自适应图像:responsive, 带边框:thumbnail, 圆角:rounded, 圆形:circle
				return ["responsive", "thumbnail", "rounded", "circle"]
				.some(item => item == value) ? value : "responsive";
			},
			default: "responsive"
		}
	},
	data() {
        return {
			source: this.src
        }
	},
	methods: {
		notimgfound() {
			this.source = require('../../../assets/image/pictures.svg').default;
		}
	},
	// mounted() {
	// 	this.source = require('&/assets/image/pictures.svg');
	// }
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

// 图片
img {
	vertical-align: middle;
	width: 100%;
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

// 带边框
// Heads up! This is mixin-ed into thumbnails.less for `.thumbnail`.
.thumbnail {
	padding: .25rem;
	line-height: @line-height-base;
	background-color: #FFF;
	border: 1px solid #ddd;
	border-radius: @border-radius-base;
	// .transition(all .2s ease-in-out);

	// padding: ;
    // background-color: #fff;
    // border: 1px solid #dee2e6;
    // border-radius: .25rem;

	.img-responsive(inline-block);												// 保持最大宽度为100％
}

// 圆形图片
.circle {
	border-radius: 50%; // 以百分比设置半径
	position:absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 1;
	// .img-responsive(inline-block);
}
</style>
