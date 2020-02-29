<template>
<div :class="[scene, disabled ? 'disabled' : '']" class="input-container">
	<input @input="input" :value="value" :placeholder="placeholder" :class="disabled ? 'disabled' : ''" :disabled="disabled" type="input"/>
	<label for="input" v-if="placeholder">{{placeholder}}</label>
	<div class="bottom-line"></div>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'

export default {
	name: 'ButInput',
	props: {
		placeholder: {
			value: String,
			default: ''
		},
		scene: {
			type: String,
			default: 'primary',
			...PropValidator('scene', ["primary", "success", "info", "warning", "danger"])
		},
		value: {
			value: String,
			default: ''
		},
		disabled: Boolean,
	},
	data: ()=>({
		// placeholder: ''
	}),
	methods: {
		input(event) {
			var value = event.target.value;
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

@width: 500px;
@border-bottom-color: #d5d5d5;
@transform-time: 0.3s;
@scale: 0.9;

.input-container {
	width: 100%;
	position: relative;
	display: flex;
	flex-flow: column-reverse;
	align-items: flex-start;
	margin: 3px auto;

	input {
		order: 10;
		outline: none;
		border: none;
		color: @text-primary;
		width: 100%;
		padding: 10px 0;
		font-size: 20px;
		background-color: transparent;
		border-bottom: 1px solid @border-bottom-color;
		text-indent: 10px;
		&::placeholder {
			opacity: 0;
		}

		&:focus, &:not(:placeholder-shown) {
			border-bottom: 1px solid rgba(0, 0, 0, 0);
			transition: all 0.3s;
		}

		&:focus ~ div, &:not(:placeholder-shown) ~ div {
			width: 100%;
		}

		&:focus + label, &:not(:placeholder-shown) + label {
			color: @primary;
			transform: translate(10px) scale(@scale);
		}
	}

	label {
		order: 100;
		color: @primary;
		transform-origin: left bottom;
		transform: translate(0px, 30px);
		transition: all 0.3s;
	}

	.bottom-line {
		order: 2;
		width: 0;
		height: 2px;
		transform: scale(1, 0.9);																	// 解决线粗细不统一的问题
		background: @primary;
		// background: @focus-border-color;
		transition: all @transform-time;
	}
}



/* 禁用状态 */
.disabled {
	box-shadow: none;
	// pointer-events: none;
	opacity: 0.5;
	// text-decoration:line-through;
	cursor: not-allowed !important;
}

.input-container(@color) {
	input {
		&:focus + label, &:not(:placeholder-shown) + label {
			color: @color;
		}
	}
	label {
		color: @color;
	}
	.bottom-line {
		background: @color;
	}
}

// 主要
.primary {
	.input-container(@primary);
}
// 成功
.success {
	.input-container(@success)
}
// 信息
.info {
	.input-container(@info)
}
// 警告
.warning {
	.input-container(@warning)
}
// 危险
.danger {
	.input-container(@danger)
}
</style>