<template>
<div class="slider">
	<input	:min="min" :max="max" :disabled="disabled" 
			v-model="rangeValue"
			type="range" class="handle">
	<range :value="styleValue" :scale="scale" :min="min" :max="max" class="range"/>
</div>
</template>

<script>
export default {
	name: "ButSlider",
	props: {
		min: {													// 最小值
			value: Number,
			default: 0
		},
		max: {													// 最大值
			value: Number,
			default: 100
		},
		value: {												// 默认值
			value: [Number, Object],
			default: 39
		},
		scene: {												// 情景颜色
			type: String,
			default: 'primary'
		},
		disabled: {												// 禁用
			type: Boolean,
			default: false
		},
		scale: {
			type: Object,
			default: function () {
				return {										// 刻度线配置
					width: 0,									// 刻度线宽
					color: this.$scene.sceneText,				// 刻度线颜色
					// color: document.documentElement.style.getPropertyValue(`--${this.scene}`).trim()
				}
			}
		},
	},
	data() {
		return {
			rangeValue: this.value,
			triggerValue: "min"
		}
	},
	methods: {
		// state(event) {
		// 	let value = event.target.value;
		// 	this.triggerValue = (Math.abs(value-this.value.min) >= Math.abs(value-this.value.max)) ? "min" : "max"
		// 	console.log("??", value)
		// },
		// onButton(event) {
		// 	event.target.addEventListener("input", this.state(event), {once: true});
		// },
		// offButton() {
		// 	// this.triggerValue = '';
		// 	event.target.addEventListener("input", this.state(event), {once: true});
		// },

		// onInput(value) {
		// 	// console.log("onButton", event)
		// 	if(this.value.constructor == Object) {
		// 		this.rangeData(value);
		// 	}else {
		// 		this.upDate(value);
		// 	}
		// },
		// rangeData(value) {
		// 	let range = this.value;
		// 	// if(this.triggerValue == "min" && value >= this.rangeValue.max) {
		// 	// 	// this.triggerValue == "max";
		// 	// 	range['max'] = value
		// 	// } else if(this.triggerValue == "max" && value <= this.rangeValue.min) {
		// 	// 	// this.triggerValue == "min";
		// 	// 	range['min'] = value
		// 	// }

		// 	range[this.triggerValue] = value
		// 	this.upDate(range);
		// },
		upDate(value) {
			this.$emit('input', value);
		},
	},
	computed: {
		styleValue() {											// 滑动条样式 需要把实际值转为0-100的比值
			return this.value;
		}
	},
	watch: {
		rangeValue: {
			handler(newName) {
				this.upDate(parseFloat(newName));
			},immediate: true
		}

	},
	components: {
		range: require("./range").default
	},
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.slider {
	width: 100%;
	height: 28px;
	display:inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;

	.handle {
		width: 100%;
		height: 100%;
		opacity: 0;
		margin: 0;
		padding: 0;
	}
}
/* 禁用状态 */
.disableds {
	box-shadow: none;
	cursor: not-allowed !important;
}
</style>