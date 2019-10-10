<template>
<button :class="types" :color="color">
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
		},
		plain: Boolean,
		circle: Boolean
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
			
			// if(this.type){
			// 	let Strings;
			// 	if(!this.plain) Strings = 'bg-';
			// 	else Strings = 'plain-';
			// 	return Strings += this.type;
			// }else {
			// 	let Strings = 'plain-';
			// 	return Strings += 'default';
			// }

			if(this.plain){
				let Strings = 'plain-';
				if(this.type){
					return Strings += this.type;
				}else {
					return Strings += 'default';
				}

			}else {
				let Strings = 'bg-';
				if(this.type){
					return Strings += this.type;
				}else {
					return Strings += 'default';
				}
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
@import './scene.less';

.button {
    height: auto;
	padding: 0 1.5rem;
	
	margin: 0 6px;
	height: 28px;
	border-radius: 2px;
	transition: .2s ease-out;
	
	line-height: 22px;

	display: inline-flex;
	justify-content: center;
	align-content: center;
	user-select: none;
	
	vertical-align: middle;

	.imgs {
		width: 22px;
		height: 22px;
		margin-right: 5px;
		display: inline-block;
	}


}


.default(@color, @background)  {
	.button;
	color: @color;
	background-color: @background;

	box-shadow: @elevation-2;
	&:hover {																	// 悬浮
		box-shadow: @elevation-3;
		cursor: pointer;
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

.plain(@color, @background) {
	.button;
	color: @color;

	&:hover {																	// 悬浮
		background-color: fadeout(@color, 80%);
		cursor: pointer;
	}
	&:active {																	// 点击
		transition: .1s ease-out;
		opacity: 0.5;
	}
	&:disabled {																// 禁用状态
		box-shadow: none;
		pointer-events: none;
		opacity: 0.5;
		text-decoration:line-through;
		cursor: not-allowed;
	}
}
</style>