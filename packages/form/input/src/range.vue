<template>
	<input @input="input(value)" :value="value" :min="min" :max="max" type="range" class="range">
</template>

<script>
export default {
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
	}
}
</script>

<style scoped>
.range[type="range"] {
	-webkit-appearance: none;										/*去除默认样式*/
	width: 100%;
	height: 24px;
	border: none;
	outline: none;
	/*input的长度为80%，margin-left的长度为10%*/
}
/* webkit */
.range[type="range"]::-webkit-slider-runnable-track {
	-webkit-appearance: none;										/*去除默认样式*/
	/* height: 4px; */
	border-radius: 5px;
	background-color: #ebeff4;
}
.range[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;										/*去除默认样式*/
	cursor: pointer;
	height: 20px;
	width: 20px;
	border: 4px solid #80bdff;
	border-radius: 50%;
	transition: .2s ease-out;

	z-index: 100;
	color:#495057;
	background-color:#fff;
	box-shadow: 0px 
}
.range[type="range"]::-webkit-slider-thumb:hover {
	box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
}
.range[type="range"]::-webkit-slider-thumb:active {
	transition: .1s ease-out;
	border: 4px solid #66ccff;
}

.range[type="range"]:disabled::-webkit-slider-thumb {
	pointer-events: none;
	border: 4px solid #ebebe4;
	cursor: default;
}

/* Trident */
input[type=range]::-ms-track {
    height: 4px;
    border-radius: 10px;
    border-color: transparent;										/*去除原有边框*/
    color: transparent;												/*去除轨道内的竖线*/
	background-color: #ebeff4;
}
.range[type="range"]::-ms-thumb {
	cursor: pointer;
	height: 16px;
	width: 16px;
	border: 4px solid #80bdff;
	border-radius: 50%;
	transition: .2s ease-out;

	background-color:#fff;
	box-shadow: 0px;
}
.range[type="range"]::-ms-thumb:hover {
	box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
}
.range[type="range"]::-ms-thumb:active {
	transition: .1s ease-out;
	border: 4px solid #66ccff;
}

.range[type="range"]:disabled::-ms-thumb {
	pointer-events: none;
	border: 4px solid #ebebe4;
	cursor: default;
}

/* Gecko */
.range[type="range"]::-moz-range-thumb {
	-webkit-appearance: none;										/*去除默认样式*/
	cursor: pointer;
	height: 20px;
	width: 20px;
	border: 4px solid #80bdff;
	border-radius: 10px;
	transition: .2s ease-out;

	z-index: 100;
	color:#495057;
	background-color:#fff;
	box-shadow: 0px 
}
.range[type="range"]::-moz-range-thumb:hover {
	box-shadow: 0 0 8px 0 rgba(0,0,0,.12);
}
.range[type="range"]::-moz-range-thumb:active {
	transition: .1s ease-out;
	border: 4px solid #66ccff;
}

.range[type="range"]:disabled::-moz-range-thumb {
	pointer-events: none;
	border: 4px solid #ebebe4;
	cursor: default;
}
</style>