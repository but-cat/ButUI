<template>
<div class="but-card-media">
	<img v-if="src" :src="src" :alt="alt" :style="radiu" @onerror="notimgfound">
</div>
</template>

<script>
import PropValidator from '../../../../core/utils/propValidator'
export default {
	name: "butCardMedia",
	inject: ['radius'],
	props: {
		src: {
			type: String,
			default: ""
		},
		alt: {
			type: String,
			default: "Responsive image"
		},
		size: {
			type: [String, Number],
			default: 200
		},
		order: {
			type: String,
			default: "",
			...PropValidator('order', ["", "head", "bottom", "covered"])
		}
	},
	data:()=>({

	}),
	computed: {
		radiu() {
			switch (this.order) {
				case "head":
					return {
						borderTopLeftRadius: this.radius,
						borderTopRightRadius: this.radius,
						height: this.size+"px",
						order: 10000
					}
				case "bottom":
					return {
						borderBottomLeftRadius: this.radius,
						borderBottomRightRadius: this.radius,
						height: this.size+"px",
						order: -10000
					}
				case "covered":
					return {
						borderRadius: this.radius
					}
			}
			return new Object;
		}
	},
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
	box-sizing: border-box;
	flex: 1;

	// 图片
	img {
		vertical-align: middle;
		object-fit: cover;
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