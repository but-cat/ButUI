import View from './src/view';
import Spring from './src/spring';
import Item from './src/item';
View.install = function(Vue) {
	Vue.component(View.name, View);
	Vue.component(Spring.name, Spring);
	Vue.component(Item.name, Item);
};
export default View;