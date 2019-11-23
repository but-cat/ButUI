<template>
<div :class="scene" class="range" @click="sliding">
	<div class="track-container"><!-- 滑动槽 -->
		<div class="track"/>
		<div class="slider"/>
	</div>

</div>
</template>

<script>
export default {
	name: "ButRange",
	props: {
		size: {
			value: String,
			default: ''
		},
		min: {
			value: Number,
			default: 0
		},
		max: {
			value: Number,
			default: 0
		},
		// value: {
		// 	default: 0,
		// 	validator(value) {
		// 		if(value instanceof "Array")
		// 			return value;
		// 		else if (value instanceof "Number")
		// 			return value;
		// 	}
		// },
		value: {
			value: Number,
			default: 0
		},
		scene: {
			type: String,
			default: 'primary'
		},
		disabled: {
			type: Boolean,
			default: false
		},
	},
	methods: {
		sliding(value) {
			this.$emit('input', value);
		},
		onButtonDown(event) {
			if (this.disabled) return;
			event.preventDefault();
			this.onDragStart(event);
			// window.addEventListener('mousemove', this.onDragging);
			// window.addEventListener('touchmove', this.onDragging);
			// window.addEventListener('mouseup', this.onDragEnd);
			// window.addEventListener('touchend', this.onDragEnd);
			// window.addEventListener('contextmenu', this.onDragEnd);
		},
	},
	computed: {
		color() {
			return this.$color;
		},
	},
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';


.range(@color) {
	width: 100%;
	height: 28px;
	display:inline-flex;
	justify-content: center;
	align-items: center;
	// 滑杆容器
	.track-container {
		width: 100%;
		height: 5px;
		// background-color: #e3ebec;
		border-radius: 100px;
		user-select: none;
		transition: all .3s;
		position: relative;
		
		// 滑杆背景层 刻度层
		.track {
			width: 100%;
			height: 100%;
			border-radius: inherit;
			background-color: @color;
			position: absolute;
			opacity: 0.5;
		}
		.slider {
			width: 100%;
			height: 100%;
			border-radius: inherit;
			position: absolute;
			background-color: @color;
		}
	}

}


.primary {														// 主要
	.range(@primary);
}
.success {														// 成功
	.range(@success)
}
.info {															// 信息
	.range(@info)
}
.warning {														// 警告
	.range(@warning)
}
.danger {														// 危险
	.range(@danger)
}
</style>