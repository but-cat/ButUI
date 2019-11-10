<template>
<div class="container">
	<slot :class="" name="1"/>
	<slot name="2"/>
	<slot name="3"/>
	<slot name="4"/>
	<slot name="5"/>
	<slot name="6"/>
</div>
</template>

<script>
export default {
	name: 'ButCarousel',
	props: {
		bodyStyle: {
			type: Object,
			default: function () {
				return {}
			}
		},
		elevation: {
			type: Number,
			default: 3
		}
	},
	data() {
        return {
			size: {
				head: this.head,
				tail: this.tail
			}
        }
	},
	computed: {
		shadow() {
			return 'elevation-' + this.elevation;
		},
		color() {
			return this.$color;
		}
	}
}
</script>

<style lang="less" scoped>
.container {
	width: 300px;
	height: 100px;
	position: relative;
	overflow: hidden;
}

.item {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0%;
	top: 0;
	transition: .3s;
	background-color: #66ccff;
}

.left {
	left: -100%;
	top: 0;
	background-color: #39c5bb;
}

.right {
	left: 100%;
	top: 0;
	background-color: #dcdcdc;
}
</style>
