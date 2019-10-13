import Docs from './src/main.vue'
Docs.install = function(Vue) {
	Vue.component(Docs.name, Docs)
}
export default Docs