# 标签栏
分隔内容上有关联但属于不同类别的数据集合。

注意,标签的父元素只能是 &lt;but-tab-bar&gt;;

## 基础用法

```vue
<template>
<but-tab-bar>
	<but-tab>
		te
	</but-tab>
</but-tab-bar>
</template>
```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name | 标签名称 | String | — | — |
| activated | 激活状态 | Boolean | true/false | false |
| icon | 图标url | String | — | — |