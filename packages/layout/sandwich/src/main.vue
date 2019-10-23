<template>
<div :style="{flexDirection: direction ? 'row' : 'column'}" class="container">
	<!-- 头部区块 -->
	<div v-if="$slots.head" :style="{flex: '0 1 '+ size.head + 'px'}" class="head">
		<slot name="head"/>
	</div>

	<!-- 手柄  :maxValue="$el.clientHeight - (tailSize+30)"-->
	<view-handle v-if="$slots.head || head==0" class="viewHandle" 
		:direction="direction"
		:limits="limits"
		:valueOpposite="size.tail"
		v-model="size.head"/>

	<!-- 主体区块 -->
	<div class="body">
		<slot/>
	</div>

	<!-- 手柄 -->
	<view-handle v-if="$slots.tail" class="viewHandle" 
		:offsetDirection="false"
		:direction="direction"
		:limits="limits"
		:valueOpposite="size.head"
		v-model="size.tail"/>

	<!-- 尾部区块 -->
	<div v-if="$slots.tail || tail==0" :style="{flex: '0 1 '+ size.tail + 'px'}" class="tail">
		<slot name="tail"/>
	</div>
</div>
</template>

<script>
export default {
	name: "ButSandwich",
	props: {
		head: {																				// 头部容器大小
			type: Number,
			default: 0
		},
		tail: {																				// 尾部容器尺寸
			type: Number,
			default: 0
		},
		limits: {																			// 限制范围 如果超出设定的范围将停止滑动
			type: Number,
			default: 50
		},
		direction: {																		// 主轴方向 true为横向 false为纵向
			type: Boolean,
			default: true
		}
	},
	data() {
        return {
			// size: {
			// 	head: this.headSize,
			// 	tail: this.tailSize
			// },
			size: {
				head: this.head,
				tail: this.tail
			}
        }
	},
	computed: {
		headSize() {
			return this.viewHandleXLimits(this.head, this.tail);
		},
		tailSize() {
			return this.viewHandleXLimits(this.tail, this.head);
		}
	},
	methods: {
		// 窗口限位
		viewHandleXLimits(value, valueOpposite) {
			let viewSize = this.direction ? this.$el.clientWidth : this.$el.clientHeight;	// 视图尺寸
			let min = this.limits,
				max = viewSize-(this.limits+valueOpposite);

			if(value <= min)
				return min;
			else if(value >= max)
				return max;
			else return value;
		},
	},
	components: {
		viewHandle: require("./viewHandle").default
	},
	watch: {
		size: {
			handler(newName, oldName) {
				this.$emit("head", newName.head);
				this.$emit("tail", newName.tail);
			},immediate: true, deep: true
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

	transition: .3s;
	position: relative;
	left: 0;
	top: 0;

	// background-color: blueviolet;

	.head {
		flex: 1;
		overflow: hidden;
	}
	.body {
		flex: 1;
		overflow: hidden;
	}
	.tail {
		flex: 1;
		overflow: hidden;
	}
}



</style>