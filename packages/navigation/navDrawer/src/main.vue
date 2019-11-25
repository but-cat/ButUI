<template>
<div :style="{width: open ? size : '0px'}" 
	:class="'modal-'+modal" class="but-navdrawer-container">

	<transition name="navdrawer-container">
		<div v-if="open" @click="close" :class="'modal-background-'+modal"
			class="but-navdrawer-content"/>
	</transition>
	<transition name="navdrawer">
		<div v-if="open" :style="{width: size}" class="but-navdrawer" >
			<navigation :src="src"><slot/></navigation>
		</div>
	</transition>
</div>
</template>

<script>
import PropValidator from '&/core/utils/propValidator'
import Navigation from './navigation.vue'
export default {
	name: 'ButNavDrawer',
	props: {
		width: {
			type: [String, Number],
			default: '256px'
		},
		open: {
			type: Boolean,
			default: false
		},
		modal: {
			type: String,
			default: 'open',
			...PropValidator('modal', ["none", "open", "sm", "md", "lg"])	
		},

		src: {
			type: String,
			default: 'img/65040104_p0.39fa516a.jpg'
		},
	},
	data() {
		return {
			container: this.open
		};
	},
	computed: {
		size() {
			return (typeof this.width == 'string') ? this.width : `${this.width}px`;		// 判断是否带后缀,如果是纯数字则带上单位px
		},
		// Hide() {
		// 	return 
		// }
	},
	methods: {
		close() {
			this.$emit("close");
		},
		containerOpen() {
			this.container = this.open;
		}
	},
	components: {
		Navigation
	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-navdrawer-container {
	box-sizing: border-box;
	flex-shrink: 0;
	position: relative;

	transition: .2s ease;

	.but-navdrawer-content {
		height: 100%;
		z-index: @zindex-navbar;
		background-color: @modal-background;
		position: absolute;
		top: 0;
		left: 0;
	}

	.but-navdrawer {
		width: 100%;
		height: 100%;
		z-index: @zindex-navbar;
		position: absolute;
		pointer-events: auto;
		top: 0;
		left: 0;
	}
}


// 基于媒体查询的模态组件
.modal-open {
	.modal;
}
.modal-background-open {
	.modal-background;
}
@media (max-width: @screen-sm) {										/*当宽度大于768px时触发*/
	.modal-sm {
		.modal;
	}
	.modal-background-sm {
		.modal-background;
	}
}
@media (max-width: @screen-md) {										/*当宽度大于992px时触发*/
	.modal-md {
		.modal;
	}
	.modal-background-md {
		.modal-background;
	}
}
@media (max-width: @screen-lg) {										/*当宽度大于1200px时触发*/
	.modal-lg {
		.modal;
	}
	.modal-background-lg {
		.modal-background;
	}
}

.modal {
	width: 100% !important;
	height: 100%;
	position: absolute !important;
	z-index: @zindex-modal-background;
	pointer-events: none;
}
.modal-background {
	width: 100% !important;
	height: 100%;
	position: absolute;
	pointer-events: auto;
	z-index: @zindex-modal-background;
}

// 背景动画
.navdrawer-container-enter-active, .navdrawer-container-leave-active {
	transition: .2s ease-in;
}
.navdrawer-container-enter, .navdrawer-container-leave-to {
	opacity: 0;
}
// 抽屉动画
.navdrawer-enter-active {
	transition: .16s ease-out;
}
.navdrawer-leave-active {
	transition: .2s ease-in;
}
.navdrawer-enter, .navdrawer-leave-to {
	transform: translateX(-100%);
}
</style>