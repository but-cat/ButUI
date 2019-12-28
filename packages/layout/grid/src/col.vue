<script>
export default {
	name: 'ButCol',

	props: {
		span: {
			type: Number,
			default: 12
		},
		tag: {
			type: String,
			default: 'div'
		},
		offset: Number,
		pull: Number,
		push: Number,
		xs: [Number, Object],
		sm: [Number, Object],
		md: [Number, Object],
		lg: [Number, Object],
		xl: [Number, Object]
	},

	computed: {
		gutter() {
			let parent = this.$parent;
			while (parent && parent.$options.componentName !== 'ButRow') {
				parent = parent.$parent;
			}
			return parent ? parent.gutter : 0;
		}
	},
	render(h) {
		let classList = [];
		let style = {};

		if (this.gutter) {
			style.paddingLeft = this.gutter / 2 + 'px';
			style.paddingRight = style.paddingLeft;
		}

		['span', 'offset', 'pull', 'push'].forEach(prop => {
			if (this[prop] || this[prop] === 0) {
				classList.push(
					prop !== 'span'
					? `but-col-${prop}-${this[prop]}`
					: `but-col-${this[prop]}`
				);
			}
		});

		['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
			if (typeof this[size] === 'number') {
				classList.push(`but-col-${size}-${this[size]}`);
			} else if (typeof this[size] === 'object') {
				let props = this[size];
				Object.keys(props).forEach(prop => {
					classList.push(
						prop !== 'span'
						? `but-col-${size}-${prop}-${props[prop]}`
						: `but-col-${size}-${props[prop]}`
					);
				});
			}
		});

		return h(this.tag, {
			class: ['but-col', classList],
			style
		}, this.$slots.default);
	}
};
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
// 框架网格生成
//
// 给定任何@ grid-columns值，Bootstrap仅使用它生成正确数量的网格类。

@grid-columns:              12;															//** 网格中的列数.
@grid-gutter-width:         30px;														//** 列之间的填充,分为左右一半.
// @grid-float-breakpoint:     @screen-sm-min;
//** Point at which the navbar begins collapsing.
// @grid-float-breakpoint-max: (@grid-float-breakpoint - 1);


/* 循环创建列填充 */
.cont(@index) when (@index > 0) {
	.cont((@index - 1));
	.but-col-xs-@{index} {
		width: percentage((@index / @grid-columns));
	}
	.but-col-sm-offset-@{index} {
		margin-left: percentage((@index / @grid-columns));
	}
	@media (min-width: @screen-sm) {										/*当宽度大于768px时触发*/
		.but-col-sm-@{index} {
			width: percentage((@index / @grid-columns));
		}
		.but-col-sm-offset-@{index} {
			margin-left: percentage((@index / @grid-columns));
		}
	}
	@media (min-width: @screen-md) {										/*当宽度大于992px时触发*/
		.but-col-md-@{index} {
			width: percentage((@index / @grid-columns));
		}
		.but-col-md-offset-@{index} {
			margin-left: percentage((@index / @grid-columns));
		}
	}
	@media (min-width: @screen-lg) {										/*当宽度大于1200px时触发*/
		.but-col-lg-@{index} {
			width: percentage((@index / @grid-columns));
		}
		.but-col-lg-offset-@{index} {
			margin-left: percentage((@index / @grid-columns));
		}
	}
}
.cont(@grid-columns);

.hidden-xs {
	@media (max-width: @screen-xs-max) {
		display: none !important;
	}
}
.hidden-sm {
	@media (min-width: @screen-sm) and (max-width: @screen-sm-max) {
		display: none !important;
	}
}
.hidden-md {
	@media (min-width: @screen-md) and (max-width: @screen-md-max) {
		display: none !important;
	}
}
.hidden-lg {
	@media (min-width: @screen-lg) {
		display: none !important;
	}
}
</style>