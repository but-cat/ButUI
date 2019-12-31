<template>
<a :href="href" :color="color" :class="scene" class="link"><slot/></a>
</template>

<script>
export default {
	name: 'ButLink',
	props: {
		href: {
			value: String,
			default: ''
		},
		scene: {
			default: "",
			validator (value) {
				return ["primary", "success", "info", "warning", "danger"]
				.some(item => item == value) ? value : "primary";
			},
		},
		type: {
			default: "text",
			validator (value) {
				return ["text", "button", "info"]
				.some(item => item == value) ? value : "primary";
			},
		}
	},
	computed: {
		color() {
			return this.$color;
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.link {
	color: var(--text-accent);
	display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
}
.link:hover {
	color: #409eff;
}

.link(@color) {
	color: @color;
}

// 主要
.primary {
	.link(@primary);
}

// 成功
.success {
	.link(@success);
}

// 信息
.info {
	.link(@info);
}

// 警告
.warning {
	.link(@warning);
}
// 危险
.danger {
	.link(@danger);
}
</style>