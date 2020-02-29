<template>
<div :class="[scene, disabled ? 'disabled' : '']" @click="toggle(value)" class="but-checkbox">
    <input :checked="value" type="checkbox" style="display:none;"><!-- 实际操作的input组件 -->
    <label for="checkbox" :class="disabled ? 'disabled' : ''" class="but-label"></label><!-- 复选框 -->
	<div class="content"><slot/></div><!-- 文本 -->
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'

export default {
	name: 'ButCheckbox',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		scene: {
			type: String,
			default: 'primary',
			...PropValidator('scene', ["primary", "success", "info", "warning", "danger"])
		},
		disabled: Boolean,
	},
	computed: {
		// 指定disableds属性
		disableds() {
			return this.disabled ? "disableds" : "";
		}
	},
	methods: {
		// 处理拨动动作
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


@checked-color: #fff;
// @checked-bg:rgb(101,141,181);
@unchecked-color: #cfcece;
@unchecked-bg:rgb(249,249,249);
@checkbox-height: 20px;
@background-color:#fff;
@font-color:#dcdcdc;
@duration: .4s;
.but-checkbox{
	display: flex;
	// justify-content: center;
	// margin-top: 60px;
	align-items: center;
	position: relative;

	input[type=checkbox]:checked + .but-label,
	.but-label.checked{

		&::after{
			border-color:@checked-color;
			height: @checkbox-height * .35;
			animation: dothabottomcheck @duration/2 ease 0s forwards;
		}

		&::before{
			border-color:@checked-color;
			height: @checkbox-height * 1;
			animation: dothatopcheck @duration ease 0s forwards;
		}

	}

	.but-label{
		height: @checkbox-height;
		width: @checkbox-height;
		border-radius: 2px;
		background: @unchecked-bg;
		border: @checkbox-height * .1 solid @unchecked-color;
		// position: relative;
		position: absolute;
		display: inline-block;
		box-sizing: border-box;
		transition: border-color ease @duration/2;
		cursor: pointer;
		&::before,&::after{
			box-sizing: border-box;
			position: absolute;
			height: 0;
			width: @checkbox-height * 0.2;
			background: @checked-color;
			display: inline-block;
			transform-origin: left top;
			content: '';
			transition: opacity ease 0.5s;
		}
		&::before{
			top:@checkbox-height * 0.7;
			left: @checkbox-height * 0.31;
			transform: rotate(-135deg);
		}
		&::after {
			top: @checkbox-height * .45;
			left: @checkbox-height * 0;
			transform: rotate(-45deg);
		}
	}

	.content{
		width: 100%;
		margin-left: 26px;
	}
}

/* 禁用状态 */
.disabled {
	box-shadow: none;
	// pointer-events: none;
	opacity: 0.5;
	// text-decoration:line-through;
	cursor: not-allowed !important;
	filter: grayscale(60%);
}


.but-container(@checked-bg){
	input[type=checkbox]:checked + .but-label,
	.but-label.checked{
		background: @checked-bg;
		border-color: @checked-bg;
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


// 主要
.primary {
	.but-container(@primary);
}
// 成功
.success {
	.but-container(@success)
}
// 信息
.info {
	.but-container(@info)
}
// 警告
.warning {
	.but-container(@warning)
}
// 危险
.danger {
	.but-container(@danger)
}

@keyframes dothabottomcheck{
	0% { height: 0; }
	100% { height: @checkbox-height *0.35;  }
}

@keyframes dothatopcheck{
	0% { height: 0; }
	50% { height: 0; }
	100% { height: @checkbox-height * 0.7; }
}

</style>