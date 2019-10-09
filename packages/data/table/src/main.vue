<template>
<tbody>
	<!--表头-->
	<tr class="md-table-row">
		<th v-for="(item, index) in tableHead" :key="index" class="md-table-head md-numeric">
			<div class="md-table-head-container">
				{{item}}
			</div>
		</th>
	</tr>
	<!--表身-->
	<tr v-for="(item, index) in data" :key="index" class="md-table-row">
		<td v-for="(item, index) in tableHead" :key="index" class="md-table-cell md-numeric">
			<div class="md-table-cell-container">
				1
			</div>
		</td>
	</tr>
</tbody>
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
	}
}
</script>

<style lang="less" scoped>

</style>