<template>
<div :style="{flexDirection: direction ? 'row' : 'column'}" class="container">
	<div :style="{flex: '0 1 '+ value + 'px'}" class="head">
		<slot name="head"/>
	</div>
	<!-- 手柄 -->


	<div class="body">
		<!-- <slot/> -->
		<button @click="headAdd">headAdd</button>
	</div>
	<!-- 手柄 -->
	<button class="viewHandle" 
		@mousemove="viewHandle" 
		@mousedown="headHandleState = false"
		@mouseup="headHandleState = true"
		:style="{left: viewHandleX-5 +'px'}"/>

	<div :style="{flex: '0 1 '+ tailSize + 'px'}" class="tail">
		<slot name="tail"/>
	</div>
</div>
</template>

<script>
export default {
	name: "ButSandwich",
	props: {
		// value: {
		// 	type: Number,
		// 	default: 300
		// },
		// tail: {
		// 	type: Number,
		// 	default: 300
		// },
		direction: {
			type: Boolean,
			default: true
		}
	},
	data() {
        return {
			headSize: 300,
			tailSize: 300,
			headHandleState: false,												// 视图手柄是否处于活跃状态
			tailHandleState: false,												// 视图手柄是否处于活跃状态
        }
	},
	computed: {
		/* 计算属性 */
	},
	methods: {
		headAdd() {
			// this.headSize += 10;
			this.$emit("input", 10)
		},

		/* 视图手柄位置赋值 */
		viewHandle(event) {
			if(this.viewHandleState){
				this.viewHandleX = event.clientX;
			}
		},
		// 禁止拖动
		dragenter(event) {
			event.preventDefault();
		},
	},
	directives: {
		head: {
			// 指令的定义
			inserted: function (el, binding, vnode) {
				this.headSize = binding.value;
			}
		},
		tail: {
			// 指令的定义
			inserted: function (el, binding, vnode) {
				this.tailSize = binding.value;
				// el.focus()
			}
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.container {
	height: 100%;
	display: flex;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	align-items: stretch;
	min-width: 0;

	// background-color: blueviolet;

	.head {
		flex: 1;
	}
	.body {
		flex: 1;
	}
	.tail {
		flex: 1;
	}
}



</style>