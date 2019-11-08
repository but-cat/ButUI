<template>
	<div :style="{flexDirection: direction ? 'row' : 'column'}" class="container">
		<!-- 头部区块 -->
		<div v-if="view.headSize > 0" :style="{flex: '0 1 '+ view.headSize + 'px'}" class="head">
			<slot name="head"/>
		</div>

		<!-- 手柄 -->
		<view-handle v-if="headHandle" class="viewHandle" 
			:direction="direction"
			:value="view.head" @handle="listeningHead"/>

		<!-- 主体区块 -->
		<div class="bodys">
			<slot/>
		</div>

		<!-- 手柄 -->
		<view-handle v-if="tailHandle" class="viewHandle" 
			:direction="direction"
			:value="view.tail" @handle="listeningTail"/>

		<!-- 尾部区块 -->
		<div v-if="view.tailSize > 0" :style="{flex: '0 1 '+ view.tailSize + 'px'}" class="tail">
			<slot name="tail"/>
		</div>

		<object class="object" type="text/html" data="about:blank"/>
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
		headHandle: {																			// 显示头部容器
			type: Boolean,
			default: true
		},

		tail: {																				// 尾部容器尺寸
			type: Number,
			default: 0
		},
		tailHandle: {																			// 显示尾部容器
			type: Boolean,
			default: true
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
			view: {
				viewSize: 1161,																// 视图尺寸

				head: this.heads,															// 头部容器手柄
				headSize: 0,																// 尾部容器手柄

				tail: this.tails,
				tailSize: 0
			},
        }
	},
	computed: {
		// 计算属性的属性对
		headOpen() {
			// 当计算属性中有相应数据时,vue会找出其中的依赖,在数据变化时执行这个方法
			return (this.head > 0) ? true : false;
		},
		tailOpen() {
			return (this.tail > 0) ? true : false;
		},

		heads() {
			return this.headOpen ? this.head : 0;
		},
		tails() {
			return this.tailOpen ? this.tail : 0;
		}
	},
	methods: {
		// 手柄位置检查
		check(value, min, max) {
			if(value <= min)
				return min;
			else if(value >= max)
				return max;
			else return value;
		},


		// 监听手柄抛出的值
		listeningHead(value) {
			if (this.headOpen){
				this.view.head = this.check(value, this.limits, this.view.viewSize - this.limits - this.view.tailSize);
				this.view.headSize = this.view.head;
			}else {
				this.view.head = 0;
				this.view.headSize = 0;	
			}

		},
		listeningTail(value) {
			if (this.tailOpen){
				this.view.tail = this.view.viewSize - this.check(value, this.limits + this.view.headSize, this.view.viewSize - this.limits);
				this.view.tailSize = this.view.tail;
			}else {
				this.view.tail = this.view.viewSize;
				this.view.tailSize = 0;	
			}
		},

		// 抛出数据
		upData(size) {
			this.$emit("head", size.headSize);
			this.$emit("tail", size.tailSize);
		},

		// 响应容器变化
		resize() {
			this.view.viewSize = this.direction ? this.$el.scrollWidth : this.$el.scrollHeight;
		}
	},
	components: {
		viewHandle: require("./viewHandle").default,
		// redraw: require("../../redraw").default
	},
	watch: {
		view: {
			handler(newName, oldName) {
				let limits = this.limits,
					viewSize = newName.viewSize,
					headSize = this.headOpen ? this.view.headSize : 0,
					tailSize = this.tailOpen ? this.view.tailSize : 0;

				if((viewSize - (headSize + tailSize + limits)) <= 0) {
					// nix = (viewSize - limits) / (this.handle.head + this.handle.tail + limits);
					let nix = viewSize / (headSize + tailSize + limits);
					
					
					let head = headSize * nix;
					this.view.headSize = this.check(head, limits, viewSize - limits - tailSize);
					this.view.head = this.view.headSize;

					let tail = tailSize * nix;
					this.view.tailSize = viewSize - this.check(tail, limits + tailSize, viewSize - limits);
					this.view.tail = viewSize - this.view.tailSize;
				}else {
					this.view.tail = viewSize - tailSize;
				}
				this.upData(newName);
			},immediate: true, deep: true
		},
		// head: {
		// 	handler(newName) {
		// 		this.listeningHead(newName);
		// 	},immediate: true, deep: true
		// },
		// tail: {
		// 	handler(newName) {
		// 		this.listeningTail(newName);
		// 	},immediate: true, deep: true
		// }
	},
	mounted() {
		this.resize();
		this.$el.getElementsByClassName("object")[0]
			.contentDocument.defaultView.addEventListener("resize", this.resize);

		this.listeningHead(this.heads);
		this.listeningTail(this.tails);
	},
	beforeDestroy() {
		this.$el.getElementsByClassName("object")[0]
			.contentDocument.defaultView.removeEventListener("resize", this.resize);
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
		height: 100%;
		flex: 1;
		overflow: hidden;
	}
	.bodys {
		flex: 1;
		height: 100%;
		overflow: hidden;
	}
	.tail {
		flex: 1;
		height: 100%;
		overflow: hidden;
	}
}

.object {
	display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
	z-index: -100;
	opacity: 0;
}

</style>