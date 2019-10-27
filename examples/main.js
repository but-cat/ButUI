import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import vueHljs from "vue-hljs";
import "vue-hljs/dist/vue-hljs.min.css";											//如果要使用默认颜色，请导入此CSS文件
Vue.use(vueHljs);

// import ButUI from './../packages'
Vue.use(require('./../packages/index').default);

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
