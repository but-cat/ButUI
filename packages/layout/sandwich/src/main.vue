<template>
	<div :style="{flexDirection: direction ? 'row' : 'column'}" class="container">
		<!-- 头部区块 -->
		<div v-if="$slots.head" :style="{flex: '0 1 '+ view.headSize + 'px'}" class="head">
			<slot name="head"/>
		</div>

		<!-- 手柄 -->
		<view-handle v-if="$slots.head || head==0" class="viewHandle" 
			:direction="direction"
			:value="view.head" @handle="listeningHead"/>

		<!-- 主体区块 -->
		<div class="bodys">
			<slot/>
		</div>

		<!-- 手柄 -->
		<view-handle v-if="$slots.tail" class="viewHandle" 
			:direction="direction"
			:value="view.tail" @handle="listeningTail"/>

		<!-- 尾部区块 -->
		<div v-if="$slots.tail || tail== 'none'" :style="{flex: '0 1 '+ view.tailSize + 'px'}" class="tail">
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
			// type: Number,
			// default: 0
			validator(value) {
				return (typeof value) == 'number' ? value : "none";
			}
		},
		tail: {																				// 尾部容器尺寸
			// type: Number,
			// default: 0
			validator(value) {
				return (typeof value) == 'number' ? value : "none";
			}
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

				head: this.head,															// 头部容器手柄
				headSize: 0,																// 尾部容器手柄

				tail: this.tail,
				tailSize: 0
			},
        }
	},
	computed: {
		// 计算属性的属性对
		tails() {
			// 当计算属性中有相应数据时,vue会找出其中的依赖,在数据变化时执行这个方法
			return this.view.viewSize - this.view.tail;
		},
		tailSize() {
			return this.view.viewSize - this.view.tail;
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
			this.view.head = this.check(value, this.limits, this.view.viewSize - this.limits - this.view.tailSize);
			this.view.headSize = this.view.head;
		},
		listeningTail(value) {
			this.view.tail = this.view.viewSize - this.check(value, this.limits + this.view.headSize, this.view.viewSize - this.limits);
			this.view.tailSize = this.view.tail;
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
					viewSize = newName.viewSize;

				console.log("nix", viewSize / (this.view.headSize + this.view.tailSize + limits))
				if((viewSize - (this.view.headSize + this.view.tailSize + limits)) <= 0) {
					// nix = (viewSize - limits) / (this.handle.head + this.handle.tail + limits);
					let nix = viewSize / (this.view.headSize + this.view.tailSize + limits);
					
					
					let head = this.view.headSize * nix;
					this.view.headSize = this.check(head, this.limits, this.view.viewSize - this.limits - this.view.tailSize);
					this.view.head = this.view.headSize;

					let tail = this.view.tailSize * nix;
					this.view.tailSize = this.view.viewSize - this.check(tail, this.limits + this.view.headSize, this.view.viewSize - this.limits);
					this.view.tail = viewSize - this.view.tailSize;
				}else {
					this.view.tail = viewSize - this.view.tailSize;
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

		this.listeningHead(this.head);
		this.listeningTail(this.tail);
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