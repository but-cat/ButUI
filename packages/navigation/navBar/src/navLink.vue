<template>
	<a :href="href" :activated="activated" class="navLink"><slot/></a>
</template>

<script>
export default {
	name: 'ButNavLink',
	props: {
		href: {
			type: String,
			default: ''
		},
		activated: {
			type: Boolean,
			default: false
		},
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';

// 导航link
.navLink {
	position: relative;
	display: inline-block;
	outline: none;
	color: var(--textPrimary);
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.2em;

	padding: 4px 10px;
	margin: 4px 10px;

	&::after {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: 4px;
		background: var(--primary);

		content: '';
		opacity: 0;
		transition: opacity 0.3s, transform 0.3s;
		transform: translateY(10px);
	}

	&:hover::after,
	&:focus::after,
	&[activated]::after {
		opacity: .3;
		transform: translateY(0px);
	}
}



.response {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
	margin-left: auto;

	// display: flex;
	// flex-direction: column;
	// align-content: center;

	//** 对于`@screen-sm-min`及以上.
	@media (min-width: @screen-sm) {
		width: @container-sm;
	}
	//** 对于`@screen-md-min`及以上.
	@media (min-width: @screen-md) {
		width: @container-md;
	}
	//** 对于`@screen-lg-min`及以上.
	@media (min-width: @screen-lg) {
		width: @container-lg;
	}
}
</style>