<template>
<ul class="timeline" :style="offset" style="--line-offset: 160px;">
	<li class="item" v-for="(item, index) in value" :key="index">
		<div class="date">{{item[keyName.date]}}</div>
		<div class="info">
			<div class="title">{{item[keyName.title]}}</div>
			<div class="content">{{item[keyName.body]}}</div>
		</div>
	</li>
</ul>
</template>

<script>
export default {
	name: 'ButTimeline',
	props: {
		value: {
			value: Array,
			default: ()=>([{
				date: '',
				title: '',
				body: ''
			}])
		},
		lineOffset: {
			value: [Number, String],
			default: 160
		},
		keyName: {
			value: Object,
			default: ()=>({
				date: 'date',
				title: 'title',
				body: 'body'
			})
		}
	},
	computed: {
		offset() {
			return `--line-offset: ${this.lineOffset}px;`
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../../_style/variables.less';
@lineOffset: var(--line-offset);
.timeline {
	--line-offset: "160px";

	margin: 0;
	padding: 0;
	min-height: 100%;
	position: relative;

	display: flex;
	flex-direction: column;

	&::before {
		content: "";
		width: 4px;
		height: 100%;
		flex: 1;
		left: @lineOffset;
		top: 0;
		// z-index: 1;
		position: absolute;
		background-color: @background-variant;
	}
	.item {
		width: calc(~"100% - var(--line-offset)");
		position: relative;
		margin: 30px @lineOffset;
		margin-right: 0;
		padding: 0;

		display: flex;
		flex-direction: row;

		.date {
			width: 140px;
			// margin-top: 6px;
			padding: 10px 20px;
			position: absolute;
			text-align: right;
			transform: translateX(-100%);
		}

		.info {
			margin: 0 30px;

			.title {
				font-size: 24px;
				letter-spacing: 0;
				line-height: 34px;
				color: var(--textHint);
				background-color: @background;
				// font-weight: 200;
			}

			.content {
				width: 100%;
				height: 100%;
				font-size: 16px;

				color: var(--textHint);
				background-color: @background;
			}
		}

		&::before {
			content: "";
			width: 10px;
			height: 10px;
			border-radius: 50%;
			border: 5px solid @primary;
			background-color: @background;
			
			// z-index: 1;
			position: absolute;
			// left: calc(0 - 8px);
			left: -8px;
			top: 10px;
		}
	}
}
</style>