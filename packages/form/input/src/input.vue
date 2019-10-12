<template>
	<input @input="input(value)" :value="value" :placeholder="placeholder" :color="color" class="searchBar searchDay" type="text">
</template>

<script>
export default {
	name: 'ButInput',
	props: {
		size: {
			value: String,
			default: ''
		},
		placeholder: {
			value: String,
			default: ''
		},
		value: {
			value: String,
			default: ''
		}
	},
	methods: {
		input(value) {
			this.$emit('input', value);
		}
	},
	computed: {
		color() {
			return this.$color;
		}
	},
}
</script>

<style scoped>
/* 搜索栏 */
.searchBar {
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0px 6px;
	box-sizing: border-box;

	/* background-color: rgba(153, 153, 153, 0.288); */
	border-radius: 3px;

	color: #6E6E6E;
    font-size: 1rem;
    height: 28px;
    background-color: transparent;
}
.searchDay {
	background-color: rgb(255, 255, 255);
	transition: .2s ease-out;
	/* border: 1px solid #75757580; */
	box-shadow: 0px 0px 2px rgba(117, 117, 117, 0.5);
}
.searchDay:hover {
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5);
}
.searchNight {
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5) inset;
}

input{
    overflow: hidden;
	outline: 0px;
    border: none;
    box-shadow: none;
}
</style>