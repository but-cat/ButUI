import Container from './src/container';
import Offset from './src/offset.vue'
import Column from './src/column.vue'
import Row from './src/row.vue';
Container.install = function (Vue) {
	Vue.component(Container.name, Container);
	Vue.component(Row.name, Row);
	Vue.component(Column.name, Column);
	Vue.component(Offset.name, Offset);
}
export default Container