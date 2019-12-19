import NavMenu from './src/navMenu.vue'
import NavMenuItem from './src/navMenuItem.vue'
export default Vue => {
	Vue.component(NavMenu.name, NavMenu);
	Vue.component(NavMenuItem.name, NavMenuItem);
}