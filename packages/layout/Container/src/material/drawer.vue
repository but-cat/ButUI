<template>
<div :style="{width: open ? size : '0px'}" :class="'modal-'+modal" class="but-drawer-container">
	<transition name="drawer-container">
		<div v-if="open" @click="close" :class="'modal-background-'+modal"
			class="but-drawer-content"/>
	</transition>
	<transition name="drawer">
		<div v-if="open" :style="{width: size}" class="but-drawer" >
			<slot/>
		</div>
	</transition>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
export default {
	name: 'ButDrawer',
	props: {
		width: {
			type: [String, Number],
			default: '300px'
		},
		open: {
			type: Boolean,
			default: false
		},
		direction: {
			type: String,
			default: 'left',
			...PropValidator('direction', ["left", "right"])
		},
		modal: {
			type: String,
			default: 'xs',
			...PropValidator('modal', ["none", "open", "xs", "sm", "md", "lg"])	
		}
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
	}
};
</script>

<style lang="less" scoped>
@import '../../../../_style/variables.less';
.but-drawer-container {
	box-sizing: border-box;
	flex-shrink: 0;
	position: relative;

	transition: .2s ease-out;

	.but-drawer-content {
		height: 100%;
		z-index: @zindex-navbar;
		background-color: var(--modal-background);
		position: absolute;
		top: 0;
		left: 0;
	}

	.but-drawer {
		height: 100%;
		z-index: @zindex-navbar;
		position: absolute;
		pointer-events: auto;
		top: 0;
		left: 0;
	}
}



.drawer-left {

}

.drawer-right {

}


.modal-xs {
	.modal;
}
.modal-background-xs {
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


.drawer-container-enter-active, .drawer-container-leave-active {
	transition: .2s ease-out;
}
.drawer-container-enter, .drawer-container-leave-to {
	opacity: 0;
}

.drawer-enter-active, .drawer-leave-active {
	transition: .2s ease-out;
}
.drawer-enter, .drawer-leave-to {
	transform: translateX(-100%);
}

// v-enter
</style>