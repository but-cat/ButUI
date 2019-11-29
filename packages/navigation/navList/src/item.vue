<template>
<div class="but-list-item-link" @click="activeFX">
	<div class="but-list-item">
		<img v-if="icon" :src="icon" class="but-list-icons"/>
		<span class="but-list-text"><slot/></span>
	</div>
</div>
</template>

<script>
export default {
	name: 'ButNavListItem',
	props: {
		// src: String,
		icon: String,
		scene: {
			type: String,
			default: "primary"
		}
	},
	data() {
        return {
			source: this.src
        }
	},
	methods: {
		notimgfound() {
			this.source = require('../../../assets/image/pictures.svg').default;
		},
		
		activeFX(event) {
			this.active(event.offsetX, event.offsetY);
		},
		active(offsetX, offsetY) {
			let active = document.createElement("div"),
				color = this.type == "contained" ? "#FFF" : this.$scene[this.scene];

			active.className = "active";
			active.style = `
				background-color: ${color};
				left: ${offsetX-5}px;
				top: ${offsetY-5}px;
				z-index: 10000;
			`;
			
			this.$el.appendChild(active);
			active.addEventListener('animationend', () => {
				this.$el.removeChild(active);
			},false);
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-list-item-link {
	width: 95%;
    height: 40px;
	margin: 4px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}

.but-list-item {
    // font-family: Roboto,sans-serif;
    // -moz-osx-font-smoothing: grayscale;
    // -webkit-font-smoothing: antialiased;
    // font-size: .875rem;
    // line-height: 1.375rem;
    // font-weight: 500;
    // letter-spacing: .0071428571em;
    // text-decoration: inherit;
	// text-transform: inherit;
	
	width: 100%;
    height: 100%;
    // margin: 8px;
	padding: 0 64px;
	border-radius: 0.2rem;
	display: inline-block;
	// background-color: aliceblue;
	box-sizing: border-box;

	position: relative;

	display: inline-flex;
    user-select: none;
	align-items: center;
	pointer-events: none;
    // justify-content: center;
    vertical-align: middle;
    font-size: 24px !important;
	margin: auto;
	
	&:hover {
		background-color: rgba(123, 146, 146, 0.178);
	}

	.but-list-icons {
	    width: 24px;
		height: 24px;
		position: absolute;
		left: 8px;
	}

	.but-list-text {
		width: 142px;
		line-height: 1.25em;
		text-overflow: ellipsis;
	    overflow: hidden;
	}
}
</style>