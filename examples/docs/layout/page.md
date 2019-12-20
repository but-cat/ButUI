# 页面容器
页面容器具有在不同屏幕下的响应宽度，你的内容就可以放入这些创建好的布局容器中。
+ &lt;but-page&gt;: 行级容器,用于容纳column项目创建布局系统

## 基础布局
```vue
<template>
<but-page :gutter="10">
	<div class="grid-content bg-purple"></div>
</but-page>
</template>
<style>
.bg-purple {
	background: #d3dce6;
}
</style>
```



### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 类型 | String| — | — |