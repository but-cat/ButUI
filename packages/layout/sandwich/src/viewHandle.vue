<template>
<button class="viewHandle" 
	@mousemove="viewHandle" 
	@mousedown="headHandleState = true"
	@mouseup="headHandleState = false"
	:style="{left: viewHandleX-5 +'px'}"/>
</template>

<script>
export default {
	props: {
		position: {
			type: Number,
			default: 0
		},
		direction: {
			type: Boolean,
			default: true
		}
	},
	data() {
        return {
			headSize: 300,
			viewHandleState: false,												// 视图手柄是否处于活跃状态
        }
	},
	computed: {
		distance() {
			if(this.direction)
				return {
					width: "8px",
					height: "100%",
					left: `${this.position}px`
				}
			else
				return {
					width: "100%",
					height: "8px",
					left: `${this.position}px`
				}
		}
	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
/* 视图手柄 */
.viewHandle {
	bottom: 0px;
	cursor: w-resize;
	padding: 0;
	border: none;															/*不渲染边框*/
	box-shadow: none;
	outline: none;															/*禁止选中高亮*/
	border-radius: 0;
	background: transparent;												/*背景颜色透明*/

	position: absolute;

	// &:hover {
	// 	background-image: url(../../../../build/icons/view/viewHandle.svg);
	// 	background-size: cover;
	// }
	// &:active {
	// 	background-image: url(../../../../build/icons/view/viewHandle.svg);
	// 	background-size: cover;
	// }
}
</style>