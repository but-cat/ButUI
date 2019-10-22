const components = [															// 所有组件列表
	require('&/layout/Container').default,
	require('&/layout/sandwich').default,
	require('&/layout/sizeListen').default,										// 容器监听组件

	require('&/layout/card').default,
];

const install = function (Vue) {												// 定义 install 方法，接收 Vue 作为参数
	
	if (install.installed) return												// 判断是否安装，安装过就不继续往下执行
	install.installed = true
	
	components.map(component => {												// 遍历注册所有组件
		// Vue.component(component.name, component);
		component.install(Vue);
	});
}

if (typeof window !== 'undefined' && window.Vue) {								// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
	install(window.Vue)
}

export default {
	install,																	// 所有组件，必须具有 install，才能使用 Vue.use()
	...components
}