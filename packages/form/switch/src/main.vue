<template>
<div :class="scene" class="switch" @click="toggle">
	<div :class="[value ? 'no' : 'off', disableds]" class="bar"></div>
	<div :class="[value ? 'no' : 'off']" class="container"></div>
</div>
</template>

<script>
export default {
	name: 'ButSwitch',
	props: {
		value: {
			type: Boolean,
			default: false
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
	computed: {
		disableds() {
			return this.disabled ? "disableds" : "";
		}
	},
	methods: {
		toggle() {
			if(!this.disabled){
				this.$emit('input', !this.value);
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../_style/variables.less';

.switch(@color) {
	position: relative;
	width: 26px;
	height: 20px;
	display:inline-flex;
	justify-content: center;
	align-items: center;
	.container {
		width: 100%;
		height: 14px;
		background-color: #e3ebec;
		border-radius: 100px;
		user-select: none;
		transition: all .3s;
		opacity: 0.5;
	}
	.bar {
		width: 20px;
		height: 20px;
		cursor: pointer;
		position: absolute;
		z-index: 1;
		border-radius: 100%;
		box-shadow: 0 0 3px 0 rgba(105,115,133,.2);
		transition: all .3s,width .3s;
	}
	.no {
		left: 14px;
		background-color: @color;
	}
	.off {
		left: -8px;
		background-color: #FFF;
	}
	/* 禁用状态 */
	.disableds {
		box-shadow: none;
		cursor: not-allowed !important;
	}
}





.primary {														// 主要
	.switch(@primary);
}
.success {														// 成功
	.switch(@success)
}
.info {															// 信息
	.switch(@info)
}
.warning {														// 警告
	.switch(@warning)
}
.danger {														// 危险
	.switch(@danger)
}
</style>