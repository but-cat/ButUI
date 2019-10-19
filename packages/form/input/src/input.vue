<template>
	<input @input="input(value)" :value="value" :placeholder="placeholder" :color="color" class="inputBar searchDay color" type="text">
</template>

<script>
export default {
	name: 'ButInput',
	props: {
		size: {
			value: String,
			default: ''
		},
		placeholder: {
			value: String,
			default: ''
		},
		value: {
			value: String,
			default: ''
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
// @import './scene.less';

/* 搜索栏 */
.inputBar {
	width: 100%;
	padding: 0px 6px;
	display: flex;
	align-items: center;
	box-sizing: border-box;

	border-radius: 3px;

    font-size: @font-size-large;
	height: @font-size-base * 2;
	
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&:focus {
		color: #495057;
		.focus();
	}
}
// .searchDay {
// 	background-color: rgb(255, 255, 255);
// 	transition: .2s ease-out;
// 	/* border: 1px solid #75757580; */
// 	box-shadow: 0px 0px 2px rgba(117, 117, 117, 0.5);
// }
// .searchDay:hover {
// 	background-color: rgb(255, 255, 255);
// 	box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5);
// }
.searchNight {
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5) inset;
}


.color {
	&[color=light]{
		color: @light-text-primary;
		background-color: @light-background
		// .default(@light-text-primary, @light-background);
	}
	&[color=dark] {
		color: @dark-text-primary;
		background-color: @dark-background
		// .default(@light-text-primary, @light-background);
	}
}



input{
    overflow: hidden;
	outline: 0px;
    border: none;
	box-shadow: none;
}
</style>