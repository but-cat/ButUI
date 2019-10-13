<template>
<div>
	<div v-for="(item, index) in value" :key="index">
		<input @input="input(index)" :value="item" :name="name" :disabled="item.disabled" type="radio" class="radio"/>
		<span>{{item}}</span>
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
			default: ''
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

.radio[type="radio"] {
	-webkit-appearance: none;										/*去除默认样式*/
	margin: 0;
	padding: 0;
	cursor: pointer;
	height: 15px;
	width: 15px;
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
.radio[type="radio"]:checked {
	border: 5px solid #66ccff;
}
.radio[type="radio"]:disabled {
	pointer-events: none;
	cursor: default;
	border: none;
	background-color: #ebeff4;
	opacity: 0.5;
}
</style>