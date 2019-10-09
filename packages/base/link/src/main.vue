<template>
<a :href="href" :color="color" :class="types"><slot/></a>
</template>

<script>
export default {
	name: 'ButLink',
	props: {
		href: {
			value: String,
			default: ''
		},
		type: {
			value: String,
			default: ''
		},
	},
	computed: {
		types() {
			if(this.type){
				return this.type;
			}else {
				return 'default';
			}
		},
		color() {
			return this.$color;
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
@import './scene.less';

.link(@color) {
	color: @color;

	display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
}
</style>