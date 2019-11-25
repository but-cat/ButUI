import NavList from './src/main'
import NavListItem from './src/item'
export default Vue => {
	Vue.component(NavList.name, NavList);
	Vue.component(NavListItem.name, NavListItem);
}