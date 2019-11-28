<template>
<!-- <div class="circle-container"> -->
	<img :src="icons" class="responsive"/>
<!-- </div> -->
</template>

<script>
import {butIcon} from '../../../assets/importIcon';
export default {
	name: 'sceneIcon',
	props: {
		type: {
			validator(value) {										// 样式类型 自适应图像:responsive, 带边框:thumbnail, 圆角:rounded, 圆形:circle
				return ["error", "error-sm", "info", "info-sm", "pass", "pass-sm", "warning", "warning-sm"]
				.some(item => item == value) ? value : "pass";
			},
			// type: String,
			default: "info"
		},
	},
	data() {
        return {
			source: this.src
        }
	},
	computed: {
		icons() {
			let icon = butIcon();
			return icon[this.type];
			// return this.$sceneIcon("error-sm", "#66ccff");
			
		},
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

.container {
	width: 100%;
	height: 0px;
	padding-bottom: 100%;
	overflow:hidden;
	margin: 0;
	position:relative;
	background: none;
}

// 圆形图片
.circle {
	position:absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 1;
	// .img-responsive(inline-block);
}


// 响应图像
// 使其防止图像缩放超出其父级容器的宽度。
.img-responsive(@display: block) {
	display: @display;
	max-width: 100%;															// 第1部分：设置相对于父对象的最大值
	height: auto;																// 第2部分：根据宽度缩放高度，否则会拉伸
}

// 自适应图像（确保图像不会超出其父级）
.responsive {
	.img-responsive(inline-block);
}
</style>
