import NavBar from './src/main'
import NavLink from './src/navLink'
import NavSearchBar from './src/searchBar.vue'
export default Vue => {
	Vue.component(NavBar.name, NavBar);
	Vue.component(NavLink.name, NavLink);
	Vue.component(NavSearchBar.name, NavSearchBar);
}