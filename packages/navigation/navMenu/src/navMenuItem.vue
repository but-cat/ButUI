<template>
<!-- <div class="nav-menu-item"> -->
	<div class="nav-menu-item" @click="activeFX" :class="activated ? 'activated' : ''">
		<img v-if="icon" :src="icon" class="but-list-icons"/>
		<span class="but-list-text"><slot/></span>
	</div>
<!-- </div> -->
</template>

<script>
import ripples from "../../../core/effects/ripples"

export default {
	name: "ButNavMenuItem",
	props: {
		src: String,
		icon: String,
		scene: {
			type: String,
			default: "primary"
		},
		activated: Boolean
	},
	// inject: ['el'],
	data: ()=>({
		source: this.src
	}),
	methods: {
		notimgfound() {
			this.source = require('../../../assets/image/pictures.svg').default;
		},
		
		activeFX(event) {
			if(!this.activated){														// 处于激活状态时将不再抛出点击事件
				this.$emit("click", event);
				ripples(event, this.type == "contained" ? "#FFF" : this.$scene[this.scene]);
			}
		}
	}
} 
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.nav-menu-item {
	width: 130px;
    height: 100%;
    // margin: 8px;
	// padding: 0 64px;
	// border-radius: 0.2rem;
	// display: inline-block;
	// background-color: aliceblue;
	box-sizing: border-box;

	position: relative;
	overflow: hidden;

	// display: flex;
	// user-select: none;
	align-items: center;
    justify-content: center;
    vertical-align: middle;
	font-size: 24px !important;
	transition: .12s;
	
	&:hover {
		background-color: rgba(123, 146, 146, 0.178);
		transition: .12s;
	}

	.but-list-icons {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 8px;
		pointer-events: none;
	}

	.but-list-text {
		width: 142px;
		line-height: 1.25em;
		text-overflow: ellipsis;
		overflow: hidden;
		pointer-events: none;
		font-size: 18px;
	}

}
.activated {
	color: @primary;
	// background-color: rgba(123, 146, 146, 0.178);
	// border: 3px ;
	border-bottom: 3px solid @primary;
	// transition: .12s;
}
</style>