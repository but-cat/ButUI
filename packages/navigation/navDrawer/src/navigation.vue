<template>
<aside class="nav-drawer">
	<div class="header" :style="{background: `linear-gradient(rgba(0, 0, 0, 0), rgba(31, 31, 31, 0.9)), url(${background}) center center / cover no-repeat`}">
		<img v-if="img" :src="img" alt="No image" @error="notimgfound" class="avatar"/>
		<div class="title">{{title}}</div>
		<div class="subtitle">{{subtext}}</div>
	</div>
	<div class="content">
		<slot/>
	</div>
</aside>
</template>

<script>
export default {
	inject: ['opens'],
	props: {
		title: String,
		subtext: String,
		img: String,
		background: String
	},
	data() {
        return {
			source: this.img
        }
	},
	methods: {
		notimgfound() {
			this.source = require('../../../assets/image/pictures.svg').default;
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.nav-drawer {
	overflow: hidden;
	height: 100%;
	
    display: flex;
    flex-direction: column;
	flex-shrink: 0;
	order: -1000;

	background-color: @background;
	
	// 头部信息 用于展示用户信息或软件信息
	.header {
		text-align: left;

		flex-shrink: 0;
		box-sizing: border-box;
		min-height: 64px;
		padding: 0 16px 4px;
		width: 100%;
		box-sizing: border-box;

		.avatar {
			border-radius: 50%; // 以百分比设置半径
			width: 50px;
			height: 50px;
			object-fit: cover;
			display: block;
			margin: 20px 0;
			// opacity: 1;
		}
		
		.title {
			color: whitesmoke;

			font-size: 1.25rem;
			line-height: 2rem;
			font-weight: 500;
			
			letter-spacing: .0125em;
			text-decoration: inherit;
			text-transform: inherit;
			display: block;
			
			margin-top: 20px;
			margin-bottom: -4px;
		}

		.subtitle {
			color: beige;

			font-family: Roboto,sans-serif;
			font-size: .875rem;
			line-height: 1.25rem;
			font-weight: 400;
			
			letter-spacing: .0178571429em;
			text-decoration: inherit;
			text-transform: inherit;
			display: block;
			
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	.content {

	}
}


</style>