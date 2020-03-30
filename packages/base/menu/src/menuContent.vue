<template>
<div v-if="open" class="but-menu-content shadow-4" :style="{top: position.y, left: position.x}" @click="enu">
	<!-- :style="{top: position.y, left: position.x}" -->
	<slot/>
</div>
</template>

<script>
import PropValidator from '../../../core/utils/propValidator'

export default {
	name: "butMenuContent",
	inject: {
		butMenu: {
			default: true
		},
	},
	props: {
		direction: {
			value: String,
			default: 'bottom',
			...PropValidator('direction', ["top", "right", "bottom", "left", "auto"])
		}
	},
	data: ()=>({
		offFunc: null
	}),
	computed: {
		position() {
			let offset = 15;

			let el = this.$parent.$el.getBoundingClientRect();
			let x = el.left + el.width/2,
				y = el.bottom + offset;

			// x -= this.$el.clientWidth/2;
			x -= 100;

			return {x: `${Math.round(x)}px`, y: `${Math.round(y)}px`}
		},
		open() {
			return this.$parent.open;
		}
	},
	methods: {
		enu() {
			console.log(this.$el.clientWidth/2);
			// this.x = this.$parent.x;
			// this.y = this.$parent.y;
		},
	},
	mounted() {
		// this.$el.addEventListener("mouseout", ()=>{
		// 	console.log("???");
		// 	this.$parent.open = false;
		// 	setTimeout(()=>{
		// 		this.$parent.open = false;
		// 	}, 5000);
		// })
		window.addEventListener("click", ()=>{
			this.$parent.open = false;
		})
		window.addEventListener("wheel", ()=>{
			this.$parent.open = false;
		})
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-menu-content {
	position: fixed;
	z-index: @zindex-popover;
	top: 0;
	left: 0;

	width: 200px;
	background-color: var(--background);
	border-radius: 3px;

	display: flex;
	flex-direction: column;

}
</style>