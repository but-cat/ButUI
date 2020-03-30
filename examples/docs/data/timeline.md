# 时间线
用于展示时间流信息,如更新日志或活动安排.

```vue
<template>
	<div class="but-vessel">
		<but-timeline :value="logList"/>
	</div>
</template>
<script>
export default {
	data() {
		return {
			logList: [
				{
					date: '2020.1.1',
					title: '第三次更新',
					body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum. Fermentum leo vel orci porta non. Fermentum posuere urna nec tincidunt praesent. Nisi scelerisque eu ultrices vitae. Morbi non arcu risus quis. Enim facilisis gravida neque convallis a. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Quam viverra orci sagittis eu.'
				},
				{
					date: '2012.1.1',
					title: '第二次更新',
					body: 'Tempor nec feugiat nisl pretium fusce id velit ut tortor. Leo a diam sollicitudin tempor id. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Urna porttitor rhoncus dolor purus non enim praesent elementum. Sodales ut etiam sit amet. Egestas egestas fringilla phasellus faucibus scelerisque. Feugiat vivamus at augue eget arcu dictum varius duis. Eros in cursus turpis massa tincidunt. At urna condimentum mattis pellentesque id nibh tortor. Justo donec enim diam vulputate ut pharetra. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ac felis donec et odio. Ut pharetra sit amet aliquam id diam. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.'
				},
				{
					date: '1999.1.1',
					title: '第一次更新',
					body: 'Et netus et malesuada fames ac turpis egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Cras tincidunt lobortis feugiat vivamus at augue. Amet risus nullam eget felis eget. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Ante metus dictum at tempor commodo ullamcorper a. Nec sagittis aliquam malesuada bibendum arcu. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Amet consectetur adipiscing elit duis tristique sollicitudin. Odio morbi quis commodo odio aenean sed adipiscing diam donec.'
				},
			]
		};
	},
};
</script>
<style>
.but-vessel {
	width: 100%;
	height: 600px;
	overflow: auto;
}
</style>
```


## 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 绑定的数据 | Array | — | — |
| lineOffset | 时间线偏移距离 | Number, String | — | — |
| keyName | 键值 | Object | — | {date: 'date',title: 'title',body: 'body'} |