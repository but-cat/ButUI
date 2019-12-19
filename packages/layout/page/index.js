import View from './src/view';
import Spring from './src/spring';
import Item from './src/item';
export default Vue => {
	Vue.component(View.name, View);
	Vue.component(Spring.name, Spring);
	Vue.component(Item.name, Item);
};