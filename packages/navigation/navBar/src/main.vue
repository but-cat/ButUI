<template>
<div :style="{position: position ? 'fixed' : 'relative'}" class="navContainer">
	<nav :class="className" :style="{borderRadius: this.fillets}" class="nav">
		<div class="left">
			<div v-if="logoSrc" class="logo"><img :src="logoSrc" alt="logo"></div>
			<slot/>
		</div>

		<div class="right">
			<slot name="menu"/>
		</div>
	</nav>
</div>
</template>

<script>
export default {
	name: 'ButNavBar',
	props: {
		logoSrc: {
			type: String,
			default: ''
		},
		elevation: {
			type: Number,
			default: 0
		},
		fillet: {
			type: Number,
			default: 0
		},
		position: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		className() {
			if(this.position)
				return `shadow-${this.elevation} response`;
			else
				return `shadow-${this.elevation}`;
		},
		fillets() {
			return this.fillet + 'px';
		}
	},
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.navContainer {
	width: 100%;
	height: 0;
	padding: 0 15px;
	// position: relative;
	top: 0;
	left: 0;
	box-sizing: border-box;

	display: flex;
	justify-content: center;
}

.nav {
	width: 98%;
	height: 52px;
	background-color: var(--background);
	padding: 0 15px;
	box-sizing: border-box;

	// .response;
	position: absolute;
	top: 10px;

	display: flex;
	flex-wrap: wrap;													// 横向
	justify-content: space-between;
	align-items: center;
		
	background-color: var(--background);

	.left,.right {
		display: flex;
		align-items: center;

		.logo {
			width: 40px;
			height: 40px;
			margin-right: 20px;
			img {
				width: 100%;
				height: 100%;
			}
		}

	}

}

.response {
    margin-right: auto;
	margin-left: auto;

	//** 对于`@screen-sm-min`及以上.
	@media (min-width: @screen-sm) {
		width: @container-sm;
	}
	//** 对于`@screen-md-min`及以上.
	@media (min-width: @screen-md) {
		width: @container-md;
	}
	//** 对于`@screen-lg-min`及以上.
	@media (min-width: @screen-lg) {
		width: @container-lg;
	}
}
</style>