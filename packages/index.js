const components = [															// 所有组件列表
	require('&/base/button').default,
	require('&/base/card').default,
];

const install = function (Vue) {												// 定义 install 方法，接收 Vue 作为参数
	if (install.installed) return												// 判断是否安装，安装过就不继续往下执行
	install.installed = true

	Vue.prototype.$color = darkMode();											// 混入暗色模式全局变量

	// components.map(component => Vue.component(component.name, component))		// 遍历注册所有组件
	// components.map(component => Vue.use(component))							// 下面这个写法也可以
	components.map(component => {
		component.install(Vue);
	});
}

function darkMode() {
	// let now = new Date(),hour = now.getHours();
	// if(hour > 6 && hour < 19){
	// 	return 'light';															// 启动夜间模式									
	// }else {
	// 	return 'dark';
	// }
	return 'dark';
}

if (typeof window !== 'undefined' && window.Vue) {								// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
	install(window.Vue)
}

export default {
	install,
	// 所有组件，必须具有 install，才能使用 Vue.use()
	...components
}