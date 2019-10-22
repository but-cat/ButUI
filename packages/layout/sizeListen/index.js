import ButListen from './src/main'
ButListen.install = function (Vue) {
	Vue.component(ButListen.name, ButListen)
}
export default ButListen;