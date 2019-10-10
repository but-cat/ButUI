<template>
<table :color="color" class="tables">
	<tbody>
		<!--表头-->
		<tr class="md-table-row">
			<th v-for="(item, index) in fields" :key="index" class="md-table-head md-numeric">
				<div class="md-table-head-container">
					{{item.label}}
				</div>
			</th>
		</tr>
		<!--表身-->
		<tr v-for="(item, index) in datas" :key="index" class="md-table-row">
			<td v-for="(lattice, index) in item" :key="index" class="md-table-cell md-numeric">
				<div class="md-table-cell-container">
					{{lattice}}
				</div>
			</td>
		</tr>
	</tbody>
</table>
</template>

<script>
export default {
	name: "ButTable",
	props: {
		fields: {
			value: Array,
			default() {
				return []
			}
		},
		data: {
			value: Array,
			default() {
				return []
			}
		}
	},
	computed: {
		datas() {

			let datas = new Array;
			this.data.map(item => 
				datas.push(
					this.tableKey(item)
				)
			)
			return datas;
		},
		color() {
			return this.$color;
		}
	},
	methods: {
		tableKey(object) {
			let data = new Array;
			this.fields.forEach(item => {
				if(item.key)
					data.push(object[item.key])
			})
			return data;
		}
	},
	mounted() {
		console.log(this.fields);
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
// @import './scene.less';  @light-background

.table(@color, @background) {
	width: 100%;
	font-family: verdana,arial,sans-serif;
	font-size: @font-size-base;
	color: @color;
	// border-width: 1px;
	// border-color: #666666;
	border-collapse: collapse;
	& tr:not(:last-child) {
		border-bottom:1px solid darken(@color, 50%);
	}
	& tr:hover:not(:first-child) {
		background-color: @background;
		transition: .1s ease-out;
	}
	& th {
		padding: 8px;
		background-color: darken(@background, 10%);
	}
	& td {
		padding: 8px;
		// background-color: @background;
	}

}


.tables{
	&[color=light]{
		.table(@light-text-primary, @light-background);
	}
	&[color=dark] {
		.table(@dark-text-primary, @dark-background);
	}
}
</style>