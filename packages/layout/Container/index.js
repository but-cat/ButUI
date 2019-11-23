import Container from './src/main.vue';

import Body from './src/block/body.vue';
import Aside from './src/block/aside.vue';
import Header from './src/block/header.vue';
import Footer from './src/block/footer.vue';



export default Vue => {
	Vue.component(Container.name, Container);
	Vue.component(Body.name, Body);
	Vue.component(Aside.name, Aside);
	Vue.component(Header.name, Header);
	Vue.component(Footer.name, Footer);
}