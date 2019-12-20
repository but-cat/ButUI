# 卡片
卡片是内容容器,你可以将信息,表单和媒体等内容元素整合在卡片容器中展示。

## 基础用法

```vue
<template>
<but-row :gutter="10">
	<but-col :xs="8">
		<but-card :elevation="3">
			<but-card-header>
				<but-title>
					Title goes here
					<small slot="small">Subtitle here</small>
				</but-title>
			</but-card-header>

			<but-card-content>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
			</but-card-content>

			<but-card-actions>
				<but-button type="text">Action</but-button>
				<but-button type="text">Action</but-button>
			</but-card-actions>
		</but-card>
	</but-col>
	
	<but-col :xs="8">
		<but-card :elevation="5" :fillet="3">
			<but-card-media :src="peapr" order="head"/>
			<but-card-header>
				<but-title>
					Title goes here
					<small slot="small">Subtitle here</small>
				</but-title>
			</but-card-header>

			<but-card-actions>
				<but-button type="text">Action</but-button>
				<but-button>Action</but-button>
			</but-card-actions>
		</but-card>
	</but-col>
	<but-col :xs="8">
		<but-card :elevation="3">
			<but-card-header>
				<but-avatar :src="avatar">
					<but-title>
						Title goes here
						<small slot="small">Subtitle here</small>
					</but-title>
				</but-avatar>
			</but-card-header>

			<but-card-media :src="miku"/>

			<but-card-content>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
			</but-card-content>

			<but-card-actions>
				<but-button type="text">Action</but-button>
				<but-button>Action</but-button>
			</but-card-actions>
		</but-card>
	</but-col>
</but-row>
</template>
<script>
export default {
	data: ()=>({
		// avatar: require('@/assets/image/lollipop.svg'),
		peapr: require('@/assets/image/78034265_p0.jpg'),
		miku: require('@/assets/image/65040104_p0.jpg')
	}),
};
</script>
```




### but-card 可选参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| bodyStyle | 传入样式 | Object | — | — |
| elevation | 海拔阴影 | Object | — | none |
| fillet | 圆角参数 | Number | — | 0 |