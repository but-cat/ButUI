<template>
<a class="but-list-item-link" href="#">
	<div class="but-list-item">
		<img v-if="icon" :src="icon" class="but-list-icons"/>
		<span class="but-list-text"><slot/></span>
		
	</div>
</a>
</template>

<script>
export default {
	name: 'ButNavListItem',
	props: {
		src: String,
		icon: String
	},
	data() {
        return {
			source: this.src
        }
	},
	methods: {
		notimgfound() {
			this.source = require('&/assets/image/pictures.svg').default;
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