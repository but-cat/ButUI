<template>
<button :class="[type, scene, disableds]" :type="type" @click="handleClick">
	<!-- <span class="submit">Submit</span> -->
	<!-- <span class="loading"/> -->
	
	<span :class="disableds" class="background"></span>
	<span class="back"></span>
	<div class="content">
		<img v-if="!!icons" :src="icons" class="imgs"><slot/>
	</div>
	
</button>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'
import {butIcon} from '../../../assets/importIcon.js'
import ripples from "../../../core/effects/ripples"

export default {
	name: 'ButButton',
	props: {
		size: {
			value: String,
			default: ''
		},
		scene: {
			default: "primary",
			...PropValidator('scene', ["primary", "success", "info", "warning", "danger"])
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
			...PropValidator('type', ["contained", "outlined", "text"])
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
				this.$emit('click', event);
				ripples(event, this.type == "contained" ? "#FFF" : this.$scene[this.scene]);
			}
		},
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
	cursor: pointer;

	position: relative;
	overflow: hidden;

	.content {
		height: 100%;
		display:inline-flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		vertical-align: middle;
		.imgs {
			width: 16px;
			height: 16px;
			// margin-right: 5px;
			margin-left: -4px;
			margin-right: 8px;
			display: block;
		}
		pointer-events: none;
	}

	.back {
		top: 0px;
		left: 0px;
		width: 101%;
		height: 101%;
		z-index: 10;
		position: absolute;
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
		&:disabled {
			cursor: not-allowed;
		}
	}

	&[type=contained] {
		color: @text;
		background-color: @color;
	}
	&[type=outlined] {
		color: @color;
		border: 1px solid @color;
		&:hover {
			// color: @color;
			.background {
				background-color: @color;
			}
		}
	}
	&[type=text] {
		color: @color;
		&:hover {
			// color: @color;
			.background {
				background-color: @color;
			}
		}

	}
}

/* 禁用状态 */
.disabled {
	box-shadow: none;
	// pointer-events: none;
	opacity: 0.5;
	// text-decoration:line-through;
	cursor: not-allowed !important;
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