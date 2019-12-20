<template>
<div class="handle">
<ul :class="!action ? 'hide' : ''" class="indicators">
	<!-- <li class="arrow" @click="red">
		<img class="arrow" src="../../../assets/image/arrow.svg" alt="←" style="transform: rotate(180deg);">
	</li> -->
	<li v-for="item in max" :key="item" @click="response(item)" class="indicator ">
		<button :class="(present+1 == item) ? 'light' : ''" class="button"><!----></button>
	</li>
	<!-- <li class="arrow" @click="add">
		<img class="arrow" src="../../../assets/image/arrow.svg" alt="→">
	</li> -->
</ul>
</div>
</template>

<script>
export default {
	props: {
		present: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 0
		},
		action: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		response(index) {
			this.$emit("thrown", index-1);
		},
		add() {
			this.$emit("add");
		},
		red() {
			this.$emit("red");
		}
	},
	data() {
        return {
			stop: false,
        }
	},
	mounted() {
		// console.log(this.key);
	}
}
</script>

<style lang="less" scoped>

.handle {
	width: 100%;
	height: 100%;
	flex: 1 0 100%;
	
	position: absolute;
	left: 0;
	top: 0;

	// pointer-events: none;
	user-select:none;

	display: flex;
	// flex-direction: column;
	// justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	flex-direction: column-reverse;
	
	.indicators {

		display: flex;
		// flex-direction: column;
		// justify-content: center;
		align-items: center;
		flex-wrap: nowrap;

		// bottom: 26px;
		box-sizing: border-box;
		pointer-events: auto;

		text-align: center;
		position: static;
		transform: none;
		transition: .3s;
		.indicator {
			cursor: pointer;
			display: inline-block;
			padding: 12px 4px;
			.button {
				background-color: #c0c4cc;
				
				display: block;
				opacity: .48;
				width: 30px;
				height: 2px;
				border: none;
				outline: none;
				padding: 0;
				margin: 0;
				transition: .3s;
				cursor: pointer;
			}
			.light {
				opacity: .15;
			}
			.arrow {
				// background-color: #c0c4cc;
				opacity: .24;

				display: block;
				// opacity: .48;
				width: 30px;
				height: 20px;
				background-color: none;
				border: none;
				outline: none;
				padding: 0;
				margin: 0;
			}
		}
	}

	ul,li{
		padding:0;
		margin:0;
		list-style:none;
	}

	.arrow {
		width: 10px;
		// margin-left: 10px;
		// padding: .2 * 10px;
		box-sizing: border-box;
		cursor: pointer;
	}
}

.hide {
	opacity: 0;
	transition: .5s;
}

.vertical {

}
</style>
