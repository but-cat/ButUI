<template>
<div class="but-avatar">
	<img :src="src" :alt="alt" v-notimg="'https://www.bing.com/th?id=OHR.MauiEucalyptus_ZH-CN5616197787_1920x1080.jpg'" class="circle"/>
	<slot/>
</div>
</template>v-

<script>
// import notimg from "../../../assets/image/pictures.svg";
import {butIcon} from '../../../assets/importIcon.js';

export default {
	name: 'ButAvatar',
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
			type: Number,
			default: 40
		}
	},
	data: ()=>({
		errorUserPhoto: 'https://www.bing.com/th?id=OHR.ValleyForge_ZH-CN8129420249_1920x1080.jpg'
	}),
	mounted() {
		console.log();
		
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-avatar {
	width: 100%;
	height: 64px;
	background: none;

	display: flex;
	flex-direction: row;
	// justify-content: space-between;
	align-items: center;


	// 图片
	img {
		margin-right: 8px;
		vertical-align: middle;
		border-radius: 50%; // 以百分比设置半径

		width: 58px;
		height: 58px;
		// border: 2px solid var(--background);
	}
}
</style>
