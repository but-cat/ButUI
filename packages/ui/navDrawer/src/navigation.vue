<template>
<aside class="but-drawer">
	<div class="header">
		<h3 class="title">Title</h3>
		<h6 class="subtitle">subtext</h6>
	</div>
	<div class="content">
		<nav class="mdc-list">
			<a class="mdc-list-item mdc-list-item--activated" href="#" tabindex="-1" aria-selected="true"><i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox</a>
			<a class="mdc-list-item" href="#" tabindex="-1">
				<i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>
				Star
			</a>
			<a class="mdc-list-item" href="#" tabindex="-1">
				<i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
				Sent Mail
			</a>
			<a class="mdc-list-item" href="#" tabindex="-1">
				<i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
				Drafts
			</a>
		</nav>
	</div>
</aside>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.but-drawer {
	overflow: hidden;
	
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

	background-color: var(--background);
    // border-color: rgba(0,0,0,.12);
    // background-color: #fff;
    // border-radius: 0 0 0 0;
    // z-index: 6;

    // box-sizing: border-box;
    // height: 100%;
    // border-right-width: 1px;
	// border-right-style: solid;
	
    // transition-property: -webkit-transform;
    // transition-property: transform;
    // transition-property: transform,-webkit-transform;
	// transition-timing-function: cubic-bezier(.4,0,.2,1);
	
	.header {
		text-align: left;

	    flex-shrink: 0;
	    box-sizing: border-box;
	    min-height: 64px;
		padding: 0 16px 4px;
		
		.title {
			font-family: Roboto,sans-serif;
		    -moz-osx-font-smoothing: grayscale;
		    -webkit-font-smoothing: antialiased;
		    font-size: 1.25rem;
		    line-height: 2rem;
		    font-weight: 500;
		    letter-spacing: .0125em;
		    text-decoration: inherit;
		    text-transform: inherit;
		    display: block;
		    margin-top: 0;
		    line-height: normal;
			margin-bottom: -20px;
		}

		.subtitle {
		    font-family: Roboto,sans-serif;
		    -moz-osx-font-smoothing: grayscale;
		    -webkit-font-smoothing: antialiased;
		    font-size: .875rem;
		    line-height: 1.25rem;
		    font-weight: 400;
		    letter-spacing: .0178571429em;
		    text-decoration: inherit;
		    text-transform: inherit;
		    display: block;
		    margin-top: 0;
		    line-height: normal;
		    margin-bottom: 0;
		}
	}


}
</style>