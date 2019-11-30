export default [															// 所有组件列表
	require('./carousel').default,											// 轮播组件
	require('./card').default,												// 卡片组件
	require('./toolsBar').default,											// 工具栏组件
];

// (function(Vue) {
// 	// if (install.installed) return										// 判断是否安装，安装过就不继续往下执行
// 	// install.installed = true
	
// 	components.map(component => {											// 遍历注册所有组件
// 		// Vue.component(component.name, component);
// 		component.install(Vue);
// 	});
// })(window.Vue)

