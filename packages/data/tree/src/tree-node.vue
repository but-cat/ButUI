<template>
<div :class="size">
	<div class="infoRow">
        <img @click='toggle' v-if="data.hasOwnProperty(children) && data[children].length > 0" :class="[ open ? 'expand' : 'folded']" class="arrow" src="../arrow.svg"/>
		<img v-if="icon.iconKey" class="icon" :src="iconFilter(data)"/>
        <span @click='eventBroadcasting' class="name">{{data[nameKey]}}</span>
    </div>
	<!-- <transition name="fade"> -->
	<but-collapse>
	<div v-show='open' class="foldedBar">
		<but-tree v-for="(cel, index) in data[children]" :key="index" 
			:data='cel'
			:children="children"
			:nameKey="nameKey"
			:size="size"
			:icon="icon"
			@node-event="eventPassed"/> 
	</div>
	</but-collapse>
	<!-- </transition> -->
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
		children: {
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
						// icon: ''
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
            open: 0
        }
	},
	computed: {
		color() {
			return this.$color;
		}
	},
    methods: {
        toggle() {
            this.open ^= 1;                                                         // 反转值
		},
		iconFilter(data) {
			let key = data[this.icon.iconKey];
			if(key)
				return this.icon.iconFilter[key];
			else
				return 'ata:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIxIDEgNTExLjk5OTc1IDUxMSIgd2lkdGg9IjUxMXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01LjIzNDM3NSA1MDcuMjYxNzE5Yy02Ljk4MDQ2OS02Ljk4MDQ2OS02Ljk4MDQ2OS0xOC4zMDA3ODEgMC0yNS4yODEyNWwzMTkuMzgyODEzLTMxOS4zODI4MTMgMjUuMjgxMjUgMjUuMjgxMjUtMzE5LjM3ODkwNyAzMTkuMzgyODEzYy02Ljk4NDM3NSA2Ljk4MDQ2OS0xOC4zMDA3ODEgNi45ODA0NjktMjUuMjg1MTU2IDB6bTAgMCIgZmlsbD0iI2RlZWNmMSIvPjxwYXRoIGQ9Im00NjguMTYwMTU2IDQ0LjMzNTkzOGMtNTguNDQ5MjE4LTU4LjQ0OTIxOS0xNTMuMjEwOTM3LTU4LjQ0OTIxOS0yMTEuNjU2MjUgMC01OC40NDkyMTggNTguNDQ1MzEyLTU4LjQ0OTIxOCAxNTMuMjA3MDMxIDAgMjExLjY1NjI1IDU4LjQ0NTMxMyA1OC40NDUzMTIgMTUzLjIwNzAzMiA1OC40NDUzMTIgMjExLjY1NjI1IDAgNTguNDQ1MzEzLTU4LjQ0OTIxOSA1OC40NDUzMTMtMTUzLjIxMDkzOCAwLTIxMS42NTYyNXptMCAwIiBmaWxsPSIjZmY5ODM4Ii8+PGcgZmlsbD0iI2ZmODcwOSI+PHBhdGggZD0ibTQ2OC4xNjQwNjIgNDQuMzMyMDMxYy0zLjg3MTA5My0zLjg3MTA5My03LjkwMjM0My03LjQ4NDM3NS0xMi4wNzAzMTItMTAuODQzNzUgNDcuMzQzNzUgNTguNzY5NTMxIDQzLjczMDQ2OSAxNDUuMDA3ODEzLTEwLjg0NzY1NiAxOTkuNTg1OTM4LTU0LjU3NDIxOSA1NC41NzgxMjUtMTQwLjgxMjUgNTguMTkxNDA2LTE5OS41ODU5MzggMTAuODQzNzUgMy4zNTkzNzUgNC4xNzE4NzUgNi45NzI2NTYgOC4yMDMxMjUgMTAuODQzNzUgMTIuMDc0MjE5IDU4LjQ0OTIxOSA1OC40NDUzMTIgMTUzLjIxMDkzOCA1OC40NDUzMTIgMjExLjY2MDE1NiAwIDU4LjQ0OTIxOS01OC40NDkyMTkgNTguNDQ5MjE5LTE1My4yMTA5MzggMC0yMTEuNjYwMTU3em0wIDAiLz48cGF0aCBkPSJtNDUzLjk2ODc1IDI3Ni4zMDg1OTRjLTgyLjEwOTM3NS02Mi45MDIzNDQtMTU0Ljg4MjgxMi0xMzUuNjY3OTY5LTIxNy43NzczNDQtMjE3Ljc4MTI1LTcuMDA3ODEyLTkuMTQ0NTMyLTUuMjE4NzUtMjIuMjQyMTg4IDQuMDE5NTMyLTI5LjEyMTA5NC4xMTMyODEtLjA4MjAzMS4yMjI2NTYtLjE2NDA2Mi4zMzU5MzctLjI0NjA5NCA5LjAxOTUzMS02LjcxNDg0NCAyMS43ODUxNTYtNC45NzY1NjIgMjguNjI1IDMuOTQ5MjE5IDYwLjcyNjU2MyA3OS4yNDYwOTQgMTMwLjk2ODc1IDE0OS40ODgyODEgMjEwLjIxMDkzNyAyMTAuMjE0ODQ0IDguOTI5Njg4IDYuODM5ODQzIDEwLjY3MTg3NiAxOS42MDU0NjkgMy45NTMxMjYgMjguNjI1LS4wODIwMzIuMTEzMjgxLS4xNjQwNjMuMjIyNjU2LS4yNS4zMzU5MzctNi44NzUgOS4yMzgyODItMTkuOTcyNjU3IDExLjAyNzM0NC0yOS4xMTcxODggNC4wMjM0Mzh6bTAgMCIvPjwvZz48L3N2Zz4=';
			// console.log(this.icon);
			// return this.icon.iconFilter[this.data[this.icon.iconKey]];
		},
		eventBroadcasting(event) {
			this.$emit('node-event', this.data, event);
		},

		// 事件传递-捕获子节点广播的事件并传递给上一层
		eventPassed(node, event) {
			this.$emit('node-event', node, event);
		},
	},
	components: {
		butCollapse: require("&/base/collapse/src/main").default
	}
}
</script>
<style lang="less" scoped>
@min: 24px;
@max: 30px;

/* 信息行 */
.objectBar(@size) {
	margin: @size/5 0;

	// 节点信息
	.infoRow {
		display: flex;
		justify-content: flex-start;
		height: @size;
		padding-left: @size;

		// 展开按钮
		.arrow {
			width: @size;
			margin-left: -@size;
			padding: .2 * @size;
			box-sizing: border-box;
		}
		.icon {
			width: @size;
		}
		.name {
			height: @size;
			// flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 0.8 * @size;
			margin-left: @size/4;
			cursor: pointer;
			user-select: none;
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
