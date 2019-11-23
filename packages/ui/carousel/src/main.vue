<template>
<div class="carousel" @mouseover="actions(true)" @mouseout="actions(false)">
	<div :style="itemStyle" class="container">
		<slot/>
	</div>
	<handle v-if="true" 
		@thrown="thrown" @add="add" @red="red" @action="actions"
		:present="item" :max="max" :action="action"/>
</div>
</template>

<script>
import handle from "./handle"
export default {
	name: 'ButCarousel',
	props: {
		vertical: {																		// 设置为垂直方向
			type: Boolean,
			default: false
		},
		max: {																			// 子组件数量
			type: Number,
			default: 0
		},
		interval: {																		// 轮播延迟毫秒数
			type: Number,
			default: 3000
		}
	},
	data() {
        return {
			item: 0,																	// 当前聚焦的板块索引
			action: false,																// 鼠标是否悬浮在组件上
			timer: null																	// 储存定时器的变量
        }
	},
	computed: {
		itemStyle() {																	// 动画样式
			if(this.vertical)
			return {
				transform: `translate3d(0px, ${this.index*100}%, 0px)`,
				flexDirection: 'column'
			}
			else return {
				transform: `translate3d(${this.index*100}%, 0px, 0px)`,
				flexDirection: 'row'
			};
		},
		index() {																		// 限制索引在 0-max 范围
			let value = Math.abs(this.item),
				max = this.max-1;
			return (value >= max) ? 0-max : 0-value;
		},
	},
	methods: {
		add() {																			// 索引+1
			// this.item += (this.item+1 > this.max) ? 0 : 1;
			this.item++;
		},
		red() {																			// 索引-1
			// this.item -= (this.item-1 < 0) ? this.max : 1;
			this.item--;
		},
		thrown(index) {																	// 捕获手柄抛出的索引
			this.item = index;
		},
		actions(value){																	// 鼠标是否悬浮在组件上(悬浮后停止动画)
			this.action = value;
		},
		startCarousel() {																// 轮播动画
			if (!this.timer) 
			this.timer = setInterval(() => {
				if(!this.action) this.add();
			}, this.interval);
		},
		endCarousel() {																	// 注销定时器
			clearInterval(this.timer);
		}
	},
	watch: {
		item: {
			handler(newName) {
				// this.item = Math.abs(newName);
				this.item = (Math.abs(newName) > this.max-1) ? 0 : Math.abs(newName);
			},
			immediate: true,
		}
	},
	components: {
		handle
	},
	mounted() {
		this.startCarousel();
		// window.addEventListener("blur", ()=>{
		// 	if(!document.hidden) this.endCarousel();
		// 	else this.startCarousel();
		// 	console.log(document.hidden);
		// });
	},
	beforeDestroy() {
		this.endCarousel();
	}
}
</script>

<style lang="less" scoped>
.carousel {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	.container {
		width: 100%;
		height: 100%;
		
		display: flex;
		// flex-direction: column;
		align-items: flex-start;
		flex-wrap: nowrap;
		
		transform: translateZ(0);
		transition: transform .35s cubic-bezier(.4,0,.2,1);
		will-change: transform;
	}
}
</style>
