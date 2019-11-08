const components = [															// 所有组件列表
	require('&/base').default,													// 基础类
	require('&/data').default,													// 数据类
	require('&/form').default,													// 表单类
	require('&/layout').default,												// 表单类
];

const install = function (Vue) {												// 定义 install 方法，接收 Vue 作为参数
	if (install.installed) return												// 判断是否安装，安装过就不继续往下执行
	install.installed = true

	Vue.prototype.$color = {
		darkMode: darkMode(),																// 混入暗色模式全局变量
		color: "light"
	} 

	components.map(item => {
		item.map(component => component(Vue));
	});


}

function darkMode(color) {
	if(!color){
		let now = new Date(),hour = now.getHours();
		if(hour > 6 && hour < 19){
			return 'light';														// 启动夜间模式									
		}else {
			return 'dark';
		}
	}else return color;
}

if (typeof window !== 'undefined' && window.Vue) {								// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
	install(window.Vue)
}

export default {
	install,
	// 所有组件，必须具有 install，才能使用 Vue.use()
	...components
}