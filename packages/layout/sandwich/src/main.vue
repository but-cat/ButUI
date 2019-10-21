<template>
<div :style="{flexDirection: direction ? 'row' : 'column'}" class="container">
	<!-- 头部区块 -->
	<div v-if="$slots.head" :style="{flex: '0 1 '+ headSize + 'px'}" class="head">
		<slot name="head"/>
	</div>

	<!-- 手柄  :maxValue="$el.clientHeight - (tailSize+30)"-->
	<view-handle v-if="$slots.head" class="viewHandle" 
		:direction="direction"
		:limits="limits"
		:valueOpposite="tailSizeTs"
		v-model="headSize"/>

	<!-- 主体区块 -->
	<div class="body">
		<!-- <slot/> -->
		<button @click="coordinatea">{{tailSizes}}</button>
	</div>

	<!-- 手柄 -->
	<view-handle v-if="$slots.tail" class="viewHandle" 
		:offsetDirection="false"
		:direction="direction"
		:limits="limits"
		:valueOpposite="headSize"
		v-model="tailSize"/>

	<!-- 尾部区块 -->
	<div v-if="$slots.tail" :style="{flex: '0 1 '+ tailSize + 'px'}" class="tail">
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
		direction: {
			type: Boolean,
			default: true
		}
	},
	data() {
        return {
			// headSize: 50,
			// tailSize: 50
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
		headSizes() {
			return this.$slots.head ? this.headSize : 0;
		},
		tailSizes() {
			return this.$slots.tail ? this.tailSize : 0;
		},
		coordinatea() {
			console.log(this.tailSizes);
		}
	},
	directives: {
		head: {
			// 指令的定义
			inserted: function (el, binding, vnode) {
				// this.headSize = binding.value;

				var me = this,
					val = this._getVMVal(vm, exp);
				node.addEventListener('input', function(e) {
					var newValue = e.target.value;
					if (val === newValue) {
						return;
					}

					me._setVMVal(vm, exp, newValue);
					val = newValue;
				});
			}
		},
		tail: {
			// 指令的定义
			inserted: function (el, binding, vnode) {
				this.tailSize = binding.value;
				// el.focus()
			}
		}
	},
	components: {
		viewHandle: require("./viewHandle").default
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