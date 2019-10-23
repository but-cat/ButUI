import ButRedraw from './src/main'
ButRedraw.install = function (Vue) {
	Vue.component(ButRedraw.name, ButRedraw)
}
export default ButRedraw;