<template>
<nav class="but-list">
	<hr class="divider">
	<h6 v-if="labels" class="subheader">{{labels}}</h6>
	<slot/>
</nav>
</template>

<script>
export default {
	name: 'ButNavList',
	props: {
		labels: String
	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

.but-list {
	// font-family: Roboto,sans-serif;
    // font-size: 1rem;
    // line-height: 1.75rem;
    // font-weight: 400;
    // letter-spacing: .009375em;
    // text-decoration: inherit;
    // text-transform: inherit;
    // line-height: 1.5rem;
    // margin: 0;
    // padding: 8px 0;
	// list-style-type: none;

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	
	color: @text-accent;
	
	.divider {
		margin: 0 0 4px;
		width: 100%;
	}
	.subheader {
	    
	    line-height: 1.25rem;
	    font-weight: 400;
	    letter-spacing: .0178571429em;
	    text-decoration: inherit;
	    text-transform: inherit;
	    display: block;
	    margin-top: 0;
	    line-height: normal;
	    margin: 0;
		padding: 0 16px;

		text-align: left;
		width: 100%;
		font-size: .8rem;
	}
}
</style>