<template>
	<div class="body" @mousemove="viewHandle" @mouseup="viewHandleOff">
		<div class="toolContainer top">
			<div class="toolItem" :style="{ width: viewHandleX +'px'}"><slot name="toolItem"></slot></div>
			<div class="toolrackItem"><slot name="shaderItem"></slot></div>
		</div>

		<div class="mainContainer" :style="{ gridTemplateColumns: viewHandleX +'px auto'}">
			<!-- 视图位置 -->
			<div class="topContainer">
				<!-- 视图位置 -->
				<div class="property slider" :style="{width: viewHandleX +'px'}">
					<slot name="property"></slot>
				</div>
				<div id="canvasView" class="item" ref="canvasView" style="background-color: #DCDCDC; width: 100%;">
					<!-- <slot name="mainView"></slot> -->
				</div>
			</div>
		</div>

		<div class="toolContainer bottom">
			<div class="toolItem" :style="{ width: viewHandleX +'px'}">
				<slot name="tabsItem"></slot>
			</div>
			<div class="toolrackItem">
				<slot name="timeSlider"></slot>
			</div>
		</div>
		<button class="viewHandle" @mousemove="viewHandle" @mousedown="viewHandleOn" @mouseup="viewHandleOff" :style="{left: viewHandleX-5 +'px'}" @dragenter="dragenter" @dragover="dragenter"></button>
	</div>
</template>
<script>
/**
 * 这是应用的2×1视图窗口组件,它负责调控各面板组件的视窗大小与位置
 * 在使用时,应使用俱名slot安置面板组件,所有面板组件在设计时需考虑自适应.
 * 注意: 如果未指定slot名称,渲染的面板组件将会被丢弃!									<!--
 */
import { constants } from 'crypto';
// import THREELib from "three-js";
import { setTimeout } from 'timers';
var THREE = require("three-js")(["OrbitControls"]);

export default {
	data() {
        return {
			viewHandleX: 300,													// 视图手柄的横坐标
			viewHandleState: false,												// 视图手柄是否处于活跃状态
			screen: {															// 当前屏幕尺寸
				Width: document.body.clientWidth,
				Height: document.body.clientHeight
			}
		}
	},
	methods: {

		/* 视图手柄位置赋值 */
		viewHandle(event) {
			if(this.viewHandleState){
				this.viewHandleX = event.clientX;
			}
		},
		// 视图手柄活跃
		viewHandleOn() {
			this.viewHandleState = true;
		},
		// 视图手柄休眠
		viewHandleOff() {
			this.viewHandleState = false;
		},
		// 禁止拖动
		dragenter(event) {
			event.preventDefault();
		},
		// 检查视图手柄是否超出限制的移动范围
		viewHandleXLimits() {
			if(this.viewHandleX <= window.innerWidth*0.2)
				this.viewHandleX = window.innerWidth*0.2;
			else if(this.viewHandleX >= window.innerWidth*0.8)
				this.viewHandleX = window.innerWidth*0.8;

			/* 调整画布视图 */
			this.$camera.aspect = this.$refs.canvasView.offsetWidth / this.$refs.canvasView.offsetHeight;
			this.$camera.updateProjectionMatrix();
			this.$renderer.setSize( this.$refs.canvasView.offsetWidth, this.$refs.canvasView.offsetHeight+1 );
		}
	},
	watch: {

		viewHandleX(newValue, oldValue) {
			this.viewHandleXLimits();
		},
		screen: {//深度监听，可监听到对象、数组的变化
			deep: true,
            handler: function(val, oldVal){
				this.viewHandleXLimits();
            },
		},immediate: true,
		
	},
	mounted () {
		// 绑定window.onresize事件,用于获取窗口的尺寸
		const that = this
		window.addEventListener("resize",function(){
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screen.Width = window.screenWidth;

				window.screenHeight = document.body.clientHeight;
				that.screen.Height = window.screenHeight;
			})()
		});
		setTimeout(() =>{this.viewHandleXLimits();}, 20)
		
	}
}
</script>
<style lang="less" scoped>

	.slider {
		overflow: auto;
		&::-webkit-scrollbar-track {
			// -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.25);
			background-color: rgba(0,0,0,0.1);
		}
		&::-webkit-scrollbar {
			width: 6px;
			height: 6px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgba(0,0,0,0.6);
		}
		&::-webkit-scrollbar-thumb:hover {
			background-color: rgba(0,0,0, 0.8);
		}
	}
	.noSlider {
		overflow: auto;
		&::-webkit-scrollbar-track {
			// -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.25);
			background-color: rgba(0,0,0,0.0);
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgba(0,0,0,0.0);
		}
	}

	.body {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		// overflow: hidden;
		/* 工具架 */
		.toolContainer {
			display: flex;
			flex-shrink: 0;

			.toolItem {
				flex-grow: 0;

				color: #f0f0f3;
				background-color: #24292e;
				border-right: 1px solid #19281E;										/*设置右边框_分割菜单栏*/
			}
			.toolrackItem {
				flex-grow: 1;

				color: #f0f0f3;
				background-color: #24292e;
			}
		}
		.top {
			height: 50px;
		}
		.bottom {
			height: 30px;
		}

		.mainContainer {
			height: 100%;
			display: flex;
			flex-direction: column;

			/* 视图栏 */
			.topContainer {
				flex-grow: 1;
				flex-shrink: 1;

				width: 100%;
				
				color: #000;
				background-color: #fff;

				display: flex;
				
				.property {
					flex-grow: 0;
					flex-shrink: 0;

				}

			}
		}
	}


	/* 视图手柄 */
	.viewHandle {
		width: 10px;
		height: 100%;
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
