import NavConfig from './nav.config.json';
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 以json配置创建路由
 * @param {json} config 传入的json配置
 */
// var component = './../docs/basic/button/README.md'
const registerRoute = (config) => {
	let route = [];
	config.map(Chapter => {
		route.push({																		// 添加章节
			name: Chapter.name,
			path: Chapter.path,
			component: require(`../docs/${Chapter.component}.md`).default
		});
		Chapter.list.map(item =>
			route.push({																	// 添加文档
				name: item.name,
				path: item.path,
				component: require(`../docs/${item.component}.md`).default
			})
		)
	})

	return route;
};

export default new Router({
	routes: registerRoute(NavConfig),
	// routes: [
	// 	{
	// 		path: '/',
	// 		name: 'welcome',
	// 		component: require('&/basic/button/README.md').default,
	// 	}
	// ]
});

