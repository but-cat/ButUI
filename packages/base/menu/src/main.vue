<template>
<div class="but-menu" @click.stop="opens">
	<slot/>
</div>
</template>

<script>
export default {
	name: "butMenu",
	data(){
		return {
			open: false,
			x: 0,
			y: 0
		}
	},
	methods: {
		opens() {
			let offset = 10;
			this.open = true;

			let el = this.$el.getBoundingClientRect();
			this.x = el.left + Math.abs(el.width/2);
			this.y = el.bottom + offset;
		}
	},
	provide: {
		butMenu: true
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-menu {
	display: inline-block;
	> .but-button {
		margin: 0;
	}
}
</style>