import Container from './src/main.vue';
import Body from './src/body.vue';

import Aside from './src/block/aside.vue';
import Header from './src/block/header.vue';
import Footer from './src/block/footer.vue';
import Drawer from "./src/block/drawer.vue";

// import Header from './src/material/header.vue';
// import Footer from './src/material/footer.vue';

export default Vue => {
	Vue.component(Container.name, Container);

	Vue.component(Body.name, Body);
	Vue.component(Aside.name, Aside);
	Vue.component(Header.name, Header);
	Vue.component(Footer.name, Footer);

	Vue.component(Drawer.name, Drawer);
}