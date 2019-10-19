<template>
<div class="radioBar" :style="{flexDirection: direction ? 'row' : 'column'}">
	<div v-for="(item, index) in value" :key="index" class="radio">
		<input @input="input(index)" :value="item" :name="name" checked :disabled="item.disabled" type="radio" />
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
		},
		direction: {
			value: Boolean,
			default: true
		},
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
			this.$emit('input', value);
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../_style/variables.less';
.radioBar {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
}

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
		border: 5px solid @dark-primary;
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

}

</style>