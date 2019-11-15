import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import vueHljs from "vue-hljs";
import "vue-hljs/dist/vue-hljs.min.css";											//如果要使用默认颜色，请导入此CSS文件
Vue.use(vueHljs);

// import ButUI from './../packages'
Vue.use(require('./../packages/index').default);

Vue.component('butcat', {
	template: '<h2 @click="reversedMessage">{{duang}}</h2>',
	props: {
		duang: {
			type: String,
			default: ''
		},
	},
	methods: {
		// 计算属性的 getter
		reversedMessage() {
			this.$emit('duang', '这是暴露数据');
		}
	}
})

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')