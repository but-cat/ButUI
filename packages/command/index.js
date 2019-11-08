const components = [															// 所有组件列表
	require('./focus').default,													// v-focus指令,用于设置页面焦点
	// require('./lazyLoad').default,												// v-lazy指令,用于动态绑定懒加载
	require('./shadow').default,												// 
];

export default {
	// install,																	// 所有组件，必须具有 install，才能使用 Vue.use()
	components
}