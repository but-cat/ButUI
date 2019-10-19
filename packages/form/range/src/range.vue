<template>
	<input @input="input(value)" :value="value" :min="min" :max="max" :color="color" type="range" class="range">
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
		value: {
			value: Number,
			default: 0
		}
	},
	methods: {
		input(value) {
			this.$emit('input', value);
		}
	},
	computed: {
		color() {
			return this.$color;
		}
	},
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.range {
	&[color=light]{
		// color: @light-text-primary;
		// background-color: @light-background;
		.rangeStyle(@light-sceneText, @light-primary, @light-scrollbar-background);
	}
	&[color=dark] {
		// color: @dark-text-primary;
		// background-color: @dark-background;
		.rangeStyle(@dark-sceneText, @dark-primary, @dark-text-primary);
	}
	&:focus {
		outline: 0;
	}
}


.rangeStyle(@color, @primaryColor, @background) {
	transition: 0.15s;
	&[type="range"] {
		/*-webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;*/
		-webkit-appearance: none; /*去除默认样式*/
		background-color: @background;
		border-radius: 3px;
		width: 100%;
		height: 4px;
		padding: 0;
		border: none;
	}

	&[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;											/*去除默认样式*/
		cursor: default;
		top: 0;
		height: 20px;
		width: 20px;
		transform: translateY(0px);
		/*background: none repeat scroll 0 0 #5891f5;*/
		background: @color;
		border-radius: 15px;
		border: 3px solid @primaryColor;
		transition: .3s;
		/*-webkit-box-shadow: 0 -1px 1px #fc7701 inset;*/
	}
	&[type="range"]:focus::-webkit-slider-thumb{
		transition: .3s;
		.focus();
	}

}
</style>