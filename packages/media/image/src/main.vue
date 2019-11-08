<template>
<img :src="src" :alt="alt" class=""/>
</template>

<script>
export default {
	name: 'ButCarousel',
	props: {
		src: {
			type: String,
			default: ''
		},
		alt: {
			type: String,
			default: 'Responsive image'
		}
	},
	data() {
        return {
			size: {
				head: this.head,
				tail: this.tail
			}
        }
	}
}
</script>

<style lang="less" scoped>
// .container {
// 	width: 300px;
// 	height: 100px;
// 	position: relative;
// 	overflow: hidden;
// }

// Images

img {
	vertical-align: middle;
}

// 自适应图像（确保图像不会超出其父级）
.img-responsive {
	.img-responsive();
}

// 圆角
.img-rounded {
	border-radius: @border-radius-large;
}

// 图片缩略图
//
// Heads up! This is mixin-ed into thumbnails.less for `.thumbnail`.
.img-thumbnail {
	padding: @thumbnail-padding;
	line-height: @line-height-base;
	background-color: @thumbnail-bg;
	border: 1px solid @thumbnail-border;
	border-radius: @thumbnail-border-radius;
	.transition(all .2s ease-in-out);

	// Keep them at most 100% wide
	.img-responsive(inline-block);
}

// 圆形图片
.img-circle {
	border-radius: 50%; // 以百分比设置半径
}

// 响应图像
// 使其防止图像缩放超出其父级容器的宽度。
.img-responsive(@display: block) {
	display: @display;
	max-width: 100%;															// 第1部分：设置相对于父对象的最大值
	height: auto;																// 第2部分：根据宽度缩放高度，否则会拉伸
}
</style>
