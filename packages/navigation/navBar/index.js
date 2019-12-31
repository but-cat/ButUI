import NavBar from './src/main'
import NavLink from './src/navLink'
import NavButton from './src/navBtn'
import NavSearchBar from './src/searchBar.vue'
export default Vue => {
	Vue.component(NavBar.name, NavBar);
	Vue.component(NavLink.name, NavLink);
	Vue.component(NavButton.name, NavButton);
	Vue.component(NavSearchBar.name, NavSearchBar);
}