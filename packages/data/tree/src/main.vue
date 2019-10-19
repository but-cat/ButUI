<template>
<div :color="color" class="tree">
	<!-- <div class="infoRow">
		<span class="name">{{Te}}</span>
    </div> -->
	<!-- 迭代节点 -->
	<tree-node v-for="(cel, index) in datas" :key="index" 
		:data='cel'
		:children="childrenKey"
		:size="size"
		:icon="icon"
		:nameKey="nameKey"
		@node-event="eventPre"/> 
</div>
</template>
<script type="text/javascript">
export default {
    name: 'ButTree',
    props: {
		data: {
			value: Object,
			default() {
				return new Object;
			}
		},
		childrenKey: {
			value: String,
			default: 'children'
		},
		nameKey: {
			value: String,
			default: 'name'
		},
		icon: {
			value: Object,
			default() {
				return {
					iconKey: '',
					iconFilter: {
						icon: ''
					}
				};
			}
		},
		size: {
			value: String,
			default: 'small'
		}
	},
	data() {
        return {
            Te: 'Hello?'
        }
	},
	computed: {
		datas() {
			if(this.data instanceof Array)
				return this.data;
			else if(this.data instanceof Object)
				return [this.data];
			else
				return new Array;
		},
		color() {
			return this.$color;
		}
	},
    methods: {
		eventPre(node, event) {
			this.$emit("nodeEvent", node, event)
		}
	},
	components: {
		treeNode: require("./tree-node").default
	}
}
</script>
<style lang="less" scoped>
@min: 24px;
@max: 30px;

.tree {
	width: 100%;
}

/* 信息行 */
.objectBar(@size) {
	margin: @size/5 0;

	// 节点信息
	.infoRow {
		display: flex;
		justify-content: flex-start;
		height: @size;

		.name {
			height: @size;
			// flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 0.8 * @size;
		}

		// 展开按钮旋转动画
		.expand {
			transition: .3s;
			transform: rotate(90deg);
			filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
		}
		.folded {
			transition: .3s;
			transform: rotate(0deg);
		}
	}
	
	.foldedBar {
		margin-left: 2rem;
		flex-shrink: 0;
	}
}

// 入口类
.medium {
	.objectBar(@max);
}
.small {
	.objectBar(@min);
}
</style>
