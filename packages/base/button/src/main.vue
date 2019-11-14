<template>
<button :class="[type, scene, disableds]" :type="type" @click="handleClick">
	<!-- <span class="submit">Submit</span> -->
	<!-- <span class="loading"/> -->
	<span class="background"/>
	<div class="content">
		<img v-if="!!icons" :src="icons" class="imgs"><slot/>
	</div>
	
</button>
</template>

<script>
import {butIcon} from '../../../assets/importIcon.js';
export default {
	name: 'ButButton',
	props: {
		size: {
			value: String,
			default: ''
		},
		scene: {
			default: "primary",
			validator (value) {
				return ["primary", "success", "info", "warning", "danger"]
				.some(item => item == value) ? value : "primary";
			},
		},
		icon: {
			value: String,
			default: ''
		},
		/**
		 * 样式类型
		 * 完整: contained, 带边框: outlined, 圆角: text
		 */
		type: {
			default: "contained",
			validator (value) {
				return ["contained", "outlined", "text"]
				.some(item => item == value) ? value : "contained";
			},
		},
		disabled: Boolean,
		circle: Boolean,
		debounce: {
			value: Boolean,
			default: false
		},
	},
	computed: {
		icons() {
			let iconSrc = this.icon.split('#')[1];
			let icon = butIcon();
			return iconSrc ? icon[iconSrc] : this.icon;
			
		},
		disableds() {
			return this.disabled ? "disabled" : "";
		}
	},
	methods: {
		handleClick(event) {
			if(!this.disabled){
				this.active(event.offsetX, event.offsetY);
				this.$emit('click', event);
			}
		},
		active(offsetX, offsetY) {
			let active = document.createElement("div"),
				color = this.type == "contained" ? "#FFF" : this.$scene[this.scene];

			active.className = "active";
			active.style = `
				background-color: ${color};
				left: ${offsetX-5}px;
				top: ${offsetY-5}px;
			`;
			
			this.$el.appendChild(active);
			active.addEventListener('animationend', () => {
				this.$el.removeChild(active);
			},false);
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
// @import './scene.less';

.button(@color, @text) {
    height: auto;
	padding: 0 1.5rem;
	
	margin: 0 6px;
	height: 28px;
	border-radius: 2px;
	transition: .2s ease-out;
	
	line-height: 22px;

	// display: inline-flex;
	// justify-content: center;
	// align-content: center;
	// user-select: none;
	
	// vertical-align: middle;

	position: relative;
	overflow: hidden;

	// opacity: 0.5;
	// .imgs {
	// 	width: 18px;
	// 	height: 18px;
	// 	// margin-right: 5px;
	// 	margin-left: -4px;
	// 	margin-right: 8px;
	// 	display: inline-block;
	// }
	// &:active {																	// 点击
	// 	transition: .1s ease-out;
	// 	opacity: 0.5;
	// }

	.content {
		height: 100%;
		display:inline-flex;
		justify-content: center;
		align-content: center;
		user-select: none;
		vertical-align: middle;
		align-items: center;
		.imgs {
			width: 18px;
			height: 18px;
			// margin-right: 5px;
			margin-left: -4px;
			margin-right: 8px;
			display: block;
		}
		pointer-events: none;
	}

	.background {
		top: 0px;
		left: 0px;
		width: 101%;
		height: 101%;
		z-index: 10;
		position: absolute;
		opacity: 0.15;
		cursor: pointer;
		// pointer-events: none;
	}

	&[type=contained] {
		color: @text;
		background-color: @color;
	}
	&[type=outlined] {
		color: @color;
		border: 1px solid @color;
		&:hover {
			color: @text;
			.background {
				background-color: @color;
			}
		}
	}
	&[type=text] {
		color: @color;
		&:hover {
			color: @text;
			.background {
				background-color: @color;
			}
		}

	}
}

.text(@color, @background) {
	// .button;
	color: @color;

	&:hover {																	// 悬浮
		// background-color: fadeout(@color, 80%);
		background-color: var(--color);
		// cursor: pointer;
	}
	&:active {																	// 点击
		transition: .1s ease-out;
		opacity: 0.5;
	}
}

/* 禁用状态 */
.disabled {
	box-shadow: none;
	// pointer-events: none;
	opacity: 0.5;
	// text-decoration:line-through;
	cursor: not-allowed;
}


// 主要
.primary {
	.button(@primary, @sceneText);
}

// 成功
.success {
	.button(@success, @sceneText)
}

// 信息
.info {
	.button(@info, @sceneText)
}

// 警告
.warning {
	.button(@warning, @sceneText)
}

// 危险
.danger {
	.button(@danger, @sceneText)
}
</style>