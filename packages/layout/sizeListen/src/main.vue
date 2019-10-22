<template>
<div class="sizeListen" :class="shadow" :style="bodyStyle" :color="color">
	<slot/>
	<object class="object" type="text/html" data="about:blank"/>
</div>
</template>

<script>
export default {
	name: 'ButListen',
	mounted() {
		const that = this;
		this.$emit("resize", this.$el.clientWidth, this.$el.clientHeight);
		this.$el.getElementsByClassName("object")[0].contentDocument.defaultView.addEventListener("resize", function(){
			that.$emit("resize", that.$el.clientWidth, that.$el.clientHeight);
		});
	}
}
</script>

<style lang="less" scoped>
.sizeListen {
	width:100%;
	height:100%;
	overflow: auto;
	position: relative;
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