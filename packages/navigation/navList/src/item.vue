<template>
<div class="but-list-item-link">
	<div class="but-list-item" @click="activeFX">
		<img v-if="icon" :src="icon" class="but-list-icons"/>
		<span class="but-list-text"><slot/></span>
	</div>
</div>
</template>

<script>
import ripples from "../../../core/effects/ripples"

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
			this.$emit("click", event);
			ripples(event, this.type == "contained" ? "#FFF" : this.$scene[this.scene]);
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
    // justify-content: center;
    vertical-align: middle;
	font-size: 24px !important;
	transition: .12s;
	margin: auto;
	
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
	}
}
</style>