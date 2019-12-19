export default [															// 所有组件列表
	require('./navDrawer').default,											// 导航抽屉
	require('./navList').default,											// 导航列表
	require('./navMenu').default,											// 导航菜单
];

// (function(Vue) {
// 	// if (install.installed) return										// 判断是否安装，安装过就不继续往下执行
// 	// install.installed = true
	
// 	components.map(component => {											// 遍历注册所有组件
// 		// Vue.component(component.name, component);
// 		component.install(Vue);
// 	});
// })(window.Vue)

