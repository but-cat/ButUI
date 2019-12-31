<template>
<div @click="rip" :style="{background: `url(${icon}) center center / cover no-repeat`}" class="button"></div>
</template>

<script>
import ripples from "../../../core/effects/ripples";
export default {
	name: 'ButNavBtn',
	props: {
		icon: String,
		scene: {
			type: String,
			default: "min"
		}
	},
	methods: {
		rip(event) {
			this.$emit("click", event);
			ripples(event, this.$scene.primary);								// 涟漪特效
		}
	}
}
</script>

<style lang="less" scoped>
.button {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 0 5px;
	cursor: pointer;
	
	position: relative;
	overflow: hidden;
}

// .button {
//     -webkit-appearance: button;
//     -webkit-writing-mode: horizontal-tb !important;
//     text-rendering: auto;
//     color: buttontext;
//     letter-spacing: normal;
//     word-spacing: normal;
//     text-transform: none;
//     text-indent: 0px;
//     text-shadow: none;
//     display: inline-block;
//     text-align: center;
//     align-items: flex-start;
//     cursor: default;
//     background-color: rgb(239, 239, 239);
//     box-sizing: border-box;
//     margin: 0em;
//     font: 400 13.3333px Arial;
//     padding: 1px 6px;
//     border-width: 2px;
//     border-style: outset;
//     border-color: rgb(118, 118, 118);
//     border-image: initial;
//     border-radius: 2px;
// }
</style>