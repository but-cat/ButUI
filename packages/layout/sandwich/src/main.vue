<template>
<div :style="{flexDirection: direction ? 'row' : 'column'}" class="container">
	<!-- 头部区块 -->
	<div v-if="$slots.head" :style="{flex: '0 1 '+ size.head + 'px'}" class="head">
		<slot name="head"/>
	</div>

	<!-- 手柄  :maxValue="$el.clientHeight - (tailSize+30)"-->
	<view-handle v-if="$slots.head" class="viewHandle" 
		:direction="direction"
		:limits="limits"
		:valueOpposite="size.tail"
		v-model="size.head"/>

	<!-- 主体区块 -->
	<div class="body">
		<!-- <slot/> -->
		<button @click="test">{{tailSizes}}</button>
	</div>

	<!-- 手柄 -->
	<view-handle v-if="$slots.tail" class="viewHandle" 
		:offsetDirection="false"
		:direction="direction"
		:limits="limits"
		:valueOpposite="size.head"
		v-model="size.tail"/>

	<!-- 尾部区块 -->
	<div v-if="$slots.tail" :style="{flex: '0 1 '+ size.tail + 'px'}" class="tail">
		<slot name="tail"/>
	</div>
</div>
</template>

<script>
export default {
	name: "ButSandwich",
	props: {
		head: {
			type: Number,
			default: 0
		},
		tail: {
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
			size: {
				head: 0,
				tail: 0
			}
        }
	},
	computed: {
		headSize() {
			return this.$slots.head ? this.head : 0;
		},
		tailSize() {
			return this.$slots.tail ? this.tail : 0;
		}
	},
	methods: {
		test() {
			console.log(this.tailSizes);
		},

		// headCommit() {
		// 	this.$emit("head", this.headSize);
		// },
		// tailCommit() {
		// 	this.$emit("tail", this.tailSize);
		// },
	},
	components: {
		viewHandle: require("./viewHandle").default
	},
	width: {
		size: {
			handler(newName, oldName) {
				this.size = newName;
				this.$emit("head", newName.head);
				this.$emit("tail", newName.tail);
			},immediate: true,
			deep: true
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

	position: relative;
	left: 0;
	top: 0;

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