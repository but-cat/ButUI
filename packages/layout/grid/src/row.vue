<script>
export default {
	name: 'ButRow',

	componentName: 'ButRow',

	props: {
		tag: {
			type: String,
			default: 'div'
		},
		gutter: Number,
		type: String,
		justify: {
			type: String,
			default: 'start'
		},
		align: {
			type: String,
			default: 'top'
		}
	},

	computed: {
		style() {
			const ret = {};

			if (this.gutter) {
				ret.marginLeft = `-${this.gutter / 2}px`;
				ret.marginRight = ret.marginLeft;
			}

			return ret;
		}
	},

	render(h) {
		return h(this.tag, {
			class: [
				'but-row',
				this.justify !== 'start' ? `is-justify-${this.justify}` : '',
				this.align !== 'top' ? `is-align-${this.align}` : '',
				{ 'but-row--flex': this.type === 'flex' }
			],
			style: this.style
		}, this.$slots.default);
	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
.but-row {
//   margin-right: -15px;
//   margin-left: -15px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	margin-bottom: 20px;

}
</style>