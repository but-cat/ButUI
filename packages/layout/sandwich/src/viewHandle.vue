<template>
<div :class="[viewHandleState ? 'viewHandleOpen' : '', direction ? 'row' : 'column']" 
	:style="viewHandleState ? '' : distance" class="viewHandle" 
	@mousemove.stop="viewHandle" 
	@mousedown.stop="viewHandleState = true"
	@mouseup.stop="viewHandleState = false"
	@mouseout.stop="viewHandleState = false"/>
</template>

<script>
export default {
	props: {
		value: {																		// 接收的容器尺寸,被用于指定手柄的位置
			type: Number,
			default: 0
		},
		direction: {																	// 主轴方向 true为横向 false为纵向
			type: Boolean,
			default: true
		},
		offsetDirection: {
			type: Boolean,
			default: true
		}
	},
	data() {
        return {
			viewHandleState: false,														// 视图手柄是否处于活跃状态
        }
	},
	computed: {
		distance() {																	// 在手柄不活跃时设置浮动的位置
			return (this.direction) ? {left: `${this.value-4}px`} : {top: `${this.value-4}px`};
			// return (this.direction) ? {[this.offsetDirection ? 'left' : 'right']: `${this.value-4}px`} : {[this.offsetDirection ? 'top' : 'bottom']: `${this.value-4}px`}
		},

		viewSize() {																	// 返回当前视图主轴方向上的尺寸
			return this.direction ? this.$el.scrollWidth : this.$el.scrollHeight;											// 如果主轴方向为纵向,返回高度
		}
	},
	methods: {
		// 向外广播指针位置偏移量
		viewHandle(event) {
			if(this.viewHandleState){													// 当视图手柄被激活后
				if(this.direction)														// 以主轴方向确定传递的值
					this.$emit("handle", event.offsetX);
				else
					this.$emit("handle", event.offsetY);
			}
		},
	},
	// beforeMount() {
	// 	this.$el.ondragstart = (event) => event.preventDefault();
	// }
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

/* 视图手柄 */
.viewHandle {
	// bottom: 0px;
	&:hover {
		background-color: rgba(75, 75, 75, 0.2);
	}
}
.row {
	width: 8px;
	height: 100%;
	cursor: w-resize;
	position: absolute;
	top: 0;
}
.column {
	width: 100%;
	height: 8px;
	cursor: n-resize;
	position: absolute;
	left: 0;
}

// 视图手柄活跃
.viewHandleOpen {
	width: 100%;
	height: 100%;
	// position: relative;
	position: absolute;
	left: 0;
	top: 0;
	
	// background-color: aqua;
	opacity: 0;
	user-select: none;
	z-index: 1;
}
</style>