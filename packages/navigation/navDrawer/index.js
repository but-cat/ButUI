import NavDrawer from './src/main'

import Navigation from './src/navigation'
// import NavList from './src/list'
import NavListItem from './src/item'

export default Vue => {
	Vue.component(NavDrawer.name, NavDrawer);
	// Vue.component(Navigation.name, Navigation);
	// Vue.component(NavList.name, NavList);
	Vue.component(NavListItem.name, NavListItem);
}