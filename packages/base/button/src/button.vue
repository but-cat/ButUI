<template>
<button class="but-button" :class="types" :color="color">
	<img v-if="!!icons" :src="icons" class="imgs"><slot/>
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
		type: {
			value: String,
			default: ''
		},
		icon: {
			value: String,
			default: ''
		}
	},
	computed: {
		icons() {
			let iconSrc = this.icon.split('#')[1];
			let icon = butIcon();
			if(iconSrc){
				return icon[iconSrc];
			}
			else
				return this.icon;
			
		},
		types() {
			if(this.type){
				let Strings = 'bg-';
				return Strings += this.type;
			}else {
				return '';
			}

		},
		color() {
			return this.$color;
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-button {
    height: auto;
	padding: 0 2rem;
	
	margin: 0 6px;
	height: 28px;
	border-radius: 2px;
	transition: .2s ease-out;
	box-shadow: @elevation-2;
	line-height: 22px;

	display: inline-flex;
	justify-content: center;
	align-content: center;
	
	vertical-align: middle;

	.imgs {
		width: 22px;
		height: 22px;
		margin-right: 5px;
		display: inline-block;
	}

	&:hover {																	// 悬浮
	box-shadow: @elevation-3;
	}
	&:active {																	// 点击
		transition: .1s ease-out;
		opacity: 0.5;
		box-shadow: @elevation-1;
	}
	&:disabled {																// 禁用状态
		box-shadow: none;
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}
}


.color {
	&[color=ligth] {

	}
	&[color=dark] {

	}
}
</style>