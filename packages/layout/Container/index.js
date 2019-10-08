import Container from './src/container';
import Column from './src/column.vue'
import Row from './src/row.vue';
Container.install = function (Vue) {
	Vue.component(Container.name, Container);
	Vue.component(Row.name, Row);
	Vue.component(Column.name, Column);
}
export default Container