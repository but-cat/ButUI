<template>
<but-container>
	<but-drawer width="200px" :open="open">Aside</but-drawer>
	<but-container>
		<but-header>Header</but-header>
		<but-body>
			<but-button v-on:click="opens">drawer</but-button>
		</but-body>
	</but-container>
</but-container>
</template>
<script>
export default {
	data() {
		return {
			open: true
		};
	},
	methods: {
		opens() {
			this.open = !this.open;
		}
	}
};
</script>
<style>
.but-drawer>content {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 200px;
}
</style>