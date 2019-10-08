import NavConfig from './nav.config.json';
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const registerRoute = (config) => {
	let route = [];
	config.map(nav =>
		nav.list.map(page =>
			route.push({
				name: page.name,
				path: page.path,
				component: require(`./pages${page.path}`),
				// meta: {
				// 	title: page.title || page.name,
				// 	description: page.description
				// }
			})
		)
	);
	return { route, navs: config };
};

export default new Router({
	routes: registerRoute(NavConfig),
});

