<template>
<div>
	<div v-for="(item, index) in value" :key="index" class="radio">
		<input @input="input(index)" :value="item" :name="name" :disabled="item.disabled" type="radio" />
		<label class="radio-label">{{item}}</label>
	</div>
	
	<!-- <input class="radio" type="radio" name="colors" id="red" value="red">红色<br>
	<input class="radio" type="radio" name="colors" id="blue" value="blue" disabled>蓝色<br>
	<input class="radio" type="radio" name="colors" id="green" value="green">绿色 -->
</div>
</template>

<script>
export default {
	name: "ButRadio",
	props: {
		size: {
			value: String,
			default: ''
		},
		name: {
			value: String,
			default: '123'
		},
		value: {
			value: Array,
			default: () => []
		}
	},
	data(){
		return {
			items: this.value,
			select: 0,
		}
	},
	methods: {
		input(index) {
			this.select = index;
			let value = this.value[index];
			console.log(value);
			this.$emit('input', value);
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../_style/variables.less';

// .radio[type="radio"] {
// 	-webkit-appearance: none;										/*去除默认样式*/
// 	margin: 0;
// 	padding: 0;
// 	cursor: pointer;
// 	height: 15px;
// 	width: 15px;
// 	border: 2px solid #ebeff4;
// 	border-radius: 10px;
// 	transition: .2s ease-out;
// 	outline: none;
// 	/*input的长度为80%，margin-left的长度为10%*/

// 	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// 	&:focus {
// 		color: #495057;
// 		.focus();
// 	}
// }
// .radio[type="radio"]:checked {
// 	border: 5px solid #66ccff;
// }
// .radio[type="radio"]:disabled {
// 	pointer-events: none;
// 	cursor: default;
// 	border: none;
// 	background-color: #ebeff4;
// 	opacity: 0.5;
// }


.radio {
	margin: 0.5rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	& input[type="radio"] {
		-webkit-appearance: none;										/*去除默认样式*/
		margin: 0;
		padding: 0;
		cursor: pointer;
		width: 1.4em;
		height: 1.4em;
		border: 2px solid #ebeff4;
		border-radius: 10px;
		transition: .2s ease-out;
		outline: none;
		/*input的长度为80%，margin-left的长度为10%*/

		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		&:focus {
			color: #495057;
			.focus();
		}
	}
	& input[type="radio"]:checked {
		border: 5px solid #66ccff;
	}
	& input[type="radio"]:disabled {
		pointer-events: none;
		cursor: default;
		border: none;
		background-color: #ebeff4;
		opacity: 0.5;
	}

	.radio-label {
		font-size: @font-size-large;
		margin-left: 0.5rem;
	}
	// & input[type="radio"] + .radio-label:before {
	// 	content: '';
	// 	background: #f4f4f4;
	// 	border-radius: 100%;
	// 	// border: 1px solid #b4b4b4;
	// 	display: inline-block;
	// 	width: 1.4em;
	// 	height: 1.4em;
	// 	position: relative;
	// 	top: -0.2em;
	// 	margin-right: 1em;
	// 	vertical-align: top;
	// 	cursor: pointer;
	// 	text-align: center;
	// 	-webkit-transition: all 250ms ease;
	// 	transition: all 250ms ease;
	// }
	// & input[type="radio"]:checked + .radio-label:before {
	// 	background-color: #3197EE;
	// 	box-shadow: inset 0 0 0 4px #f4f4f4;
	// }
	// & input[type="radio"]:focus + .radio-label:before {
	// 	outline: none;
	// 	border-color: #3197EE;
	// }
	// & input[type="radio"]:disabled + .radio-label:before {
	// 	box-shadow: inset 0 0 0 4px #f4f4f4;
	// 	border-color: #b4b4b4;
	// 	background: #b4b4b4;
	// }
	// & input[type="radio"] + .radio-label:empty:before {
	// 	margin-right: 0;
	// }

}

</style>