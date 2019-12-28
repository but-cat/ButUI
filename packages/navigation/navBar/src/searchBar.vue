<template>
<div class="searchBar">
	<input @input="input" :value="value" :class="disabled ? 'disabled' : ''" :placeholder="placeholder" type="text">
	<button @click="search" class="button">
		<svg version="1.1" x="0px" y="0px" width="24px" viewBox="0 0 484.925 484.925">
			<path fill="#6E6E6E" d="M466.775,378.763l-42.9-42.9c-7-7-18.4-7-25.5,0c-7,7-7,18.4,0,25.5l42.9,42.9c10.2,10.2,10.2,26.7,0,36.9
				c-4.9,4.9-11.5,7.6-18.5,7.6s-13.5-2.7-18.5-7.6l-82.2-82.2l49.6-49.6c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-18.5,18.5l-26-26
				c53.8-66.6,49.8-164.7-12.1-226.5c-32-32-74.6-49.7-120-49.7c-45.3,0-87.9,17.6-120,49.7c-66.1,66.1-66.1,173.8,0,239.9
				c32,32,74.6,49.7,120,49.7c39.3,0,76.5-13.3,106.6-37.6l26,26l-18.5,18.5c-3.4,3.4-5.3,8-5.3,12.7s1.9,9.4,5.3,12.7l95,95
				c12.4,11.9,28.3,18,44.2,18c15.9,0,31.8-6.1,43.9-18.2C490.975,442.362,490.975,402.963,466.775,378.763z M264.375,264.163
				c-25.2,25.2-58.8,39.1-94.5,39.1s-69.3-13.9-94.5-39.1c-52.1-52.1-52.1-136.9,0-189c25.2-25.2,58.8-39.1,94.5-39.1
				c35.7,0,69.3,13.9,94.5,39.1C316.475,127.263,316.475,212.063,264.375,264.163z"/>
		</svg>
	</button>
</div>
</template>

<script>
export default {
	name: "butNavSearch",
	props: {
		value: {
			value: String,
			default: ''
		},
		placeholder: String,
		disabled: Boolean,
	},
	methods: {
		input(event) {
			var value = event.target.value;
			this.$emit('input', value);
		},
		search() {
			if(!this.disabled){
				this.$emit('search', !this.value);
			}
		}
	}
}
</script>

<style lang="less" scoped>
/* 搜索栏 */
.searchBar {
	// margin: 0 20px;
	display: flex;
	align-items: center;
	padding: 0px 6px;

	background-color: rgba(223, 223, 223, 0.2);
	border-radius: .25rem;

	input{
		background:none;
		outline:none;
		border:0px;

		color: #6E6E6E;
		font-size: 1rem;
		height: 28px;
		background-color: transparent;
	}
	.button {
		border: 0;
		background-color: transparent;
		outline: none;
		cursor: pointer;

		&:active {
			opacity: 0.5;
		}
	}
	.searchDay {
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5);
	}
	.searchNight {
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5) inset;
	}
}

/* 禁用状态 */
.disabled {
	box-shadow: none;
	// pointer-events: none;
	opacity: 0.5;
	// text-decoration:line-through;
	cursor: not-allowed !important;
}
</style>