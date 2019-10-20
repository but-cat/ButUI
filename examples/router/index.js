import NavConfig from './nav.config.json';
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 以json配置创建路由
 * @param {json} config 传入的json配置
 */
// var component = './../docs/basic/button/README.md'
const route = config => {
	let route = [];
	route.push({
		name: "测试",
		path: "/test",
		component: require("@/view/test.vue").default
	});

	config.map(Chapter => {
		route.push({																		// 添加章节
			name: Chapter.name,
			path: Chapter.path,
			component: require(`../docs/${Chapter.component}.md`).default
		});
		if(Chapter.list)
			Chapter.list.map(item =>
				route.push({																	// 添加文档
					name: item.name,
					path: item.path,
					component: require(`../docs/${item.component}.md`).default
				})
			);
	});

	return route;
};

/**
 * 木有卵用的递归路由表加载器
 * @param {*} config 迭代的json对象
 * @param {*} route 路由数组
 */
function registerRoute (config, route) {

	config.map(Chapter => {
		let routes = {			
			name: Chapter.name,
			path: Chapter.path,
			component: require(`../docs/${Chapter.component}.md`).default
		}
		if(Chapter.list){
			routes.children = new Array;
			registerRoute(Chapter.list, routes.children);
		}
		route.push(routes);
	});
}

export default new Router({
	routes: route(NavConfig),
	// routes: [
	// 	{
	// 		path: '/',
	// 		name: 'welcome',
	// 		component: require('&/basic/button/README.md').default,
	// 	}
	// ]
});

