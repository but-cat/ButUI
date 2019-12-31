<template>
<div :style="{position: position ? 'fixed' : 'relative'}" class="navContainer">
	<nav :class="[className, hide?'slideUp':'slideDown']" :style="{borderRadius: this.fillets}" class="nav">
		<div class="left">
			<div v-if="logoSrc" class="logo"><img :src="logoSrc" alt="logo"></div>
			<slot/>
		</div>

		<div class="right">
			<slot name="menu"/>
			<!-- <but-nav-btn icon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzZFNkU2RSIgZD0iTTExLjUxNCwyNC42NDZjLTQuMDU2LDAtNy4zNTUsMy4yOTktNy4zNTUsNy4zNTRjMCw0LjA1NiwzLjI5OSw3LjM1NCw3LjM1NSw3LjM1NGM0LjA1NCwwLDcuMzU0LTMuMjk4LDcuMzU0LTcuMzU0DQoJCQlDMTguODY4LDI3Ljk0NSwxNS41NjgsMjQuNjQ2LDExLjUxNCwyNC42NDZ6Ii8+DQoJCTxwYXRoIGZpbGw9IiM2RTZFNkUiIGQ9Ik0zMi4zNjEsMjQuNjQ2Yy00LjA1NiwwLTcuMzU1LDMuMjk5LTcuMzU1LDcuMzU0YzAsNC4wNTYsMy4yOTksNy4zNTQsNy4zNTUsNy4zNTRjNC4wNTUsMCw3LjM1NS0zLjI5OCw3LjM1NS03LjM1NA0KCQkJQzM5LjcxNiwyNy45NDUsMzYuNDE2LDI0LjY0NiwzMi4zNjEsMjQuNjQ2eiIvPg0KCQk8cGF0aCBmaWxsPSIjNkU2RTZFIiBkPSJNNTIuNDg3LDI0LjY0NmMtNC4wNTUsMC03LjM1NCwzLjI5OS03LjM1NCw3LjM1NGMwLDQuMDU2LDMuMyw3LjM1NCw3LjM1NCw3LjM1NGM0LjA1NCwwLDcuMzU0LTMuMjk4LDcuMzU0LTcuMzU0DQoJCQlDNTkuODQxLDI3Ljk0NSw1Ni41NDEsMjQuNjQ2LDUyLjQ4NywyNC42NDZ6Ii8+DQoJPC9nPg0KPC9zdmc+DQo=" class=""/> -->
		</div>
	</nav>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
export default {
	name: 'ButNavBar',
	props: {
		logoSrc: {
			type: String,
			default: ''
		},
		elevation: {
			type: [String, Number],
			default: 0
		},
		fillet: {
			type: [String, Number],
			default: 0
		},
		position: {
			type: Boolean,
			default: false
		},
		hide: {
			type: [Boolean, String],
			default: false,
			...PropValidator('hide', [true, false, "auto"])
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

// 隐藏
.slideUp {
	transform: translateY(-100px);
	transition: transform .5s ease-out;
}
// 显示
.slideDown {
	transform: translateY(0);
	transition: transform .5s ease-out;
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