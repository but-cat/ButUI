<template>
<div class="track-container">
	<div :style="scaleLine" :class="scene" class="track"/>
	<div :style="sliderStyle" :class="scene" class="value"/>
	<div :style="{left: `calc(${value}% - 8px)`}" :class="scene" class="thumb"/>
	<div :style="{left: `calc(60% - 8px)`}" :class="scene" class="thumb" v-if="this.value.constructor == Object"/>
</div>
</template>

<script>
export default {
	name: "ButRange",
	props: {
		value: [Number, Object],
		min: {													// 最小值
			value: Number,
			default: 0
		},
		max: {													// 最大值
			value: Number,
			default: 100
		},
		scene: {												// 情景颜色
			type: String,
			default: 'primary'
		},
		disabled: {												// 禁用
			type: Boolean,
			default: false
		},
		scale: Object
	},
	data() {
		return {
			rangeValue: 0
		}
	},
	computed: {
		scaleLine() {												// 刻度线样式
			let lineWidth = Math.abs(this.scale.width),
				noScale = {background: `var(--${this.scene})`},
				scaleLine = {
					background: `linear-gradient(to right, ${this.scale.color} ${lineWidth}px, var(--${this.scene}) 0px)
								 0px center / calc((100% - ${lineWidth}px) / ${Math.abs(this.max-this.min)}) 100% repeat-x`
				};
			return (lineWidth != 0) ? scaleLine : noScale;			// 当刻度线不为0时,激活刻度线样式
		},
		disableds() {												// 禁用
			return this.disabled ? "disabled" : "";
		},
		sliderStyle() {												// 实际值
			if(this.value.constructor == Object){
				let min = this.value.min - this.min,
					max = this.value.max;
				return {
					width: `${max}%`,
					left: `${min}%`
				}
			}else return {width: `${this.value}%`}
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

// 滑杆容器
.track-container {
	width: calc(100% - 1.5px);
	height: 3px;
	// background-color: #e3ebec;
	border-radius: 100px;
	user-select: none;
	position: absolute;
	pointer-events: none;
	
	// 滑杆背景层 刻度层
	.track {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		// background-color: #ffffff;
		position: absolute;
		opacity: 0.4;
	}
	.value {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		position: absolute;
		// background-color: @color;
		// transition: all .1s;
	}
	.thumb {
		width: 16px;
		height: 16px;
		margin-top: -6px;
		position: absolute;
		z-index: 1;
		border-radius: 100%;
		box-shadow: 0 0 3px 0 rgba(105,115,133,.2);
		// pointer-events: auto;
		// transition: all .3s,width .3s;
	}
}



.primary {														// 主要
	background-color: @primary;
}
.success {														// 成功
	background-color: @success;
}
.info {															// 信息
	background-color: @info;
}
.warning {														// 警告
	background-color: @warning;
}
.danger {														// 危险
	background-color: @danger;
}
</style>