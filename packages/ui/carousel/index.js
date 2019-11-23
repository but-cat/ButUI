import Carousel from './src/main.vue'
import CarouselItem from './src/item.vue'
export default Vue => {
	Vue.component(Carousel.name, Carousel);
	Vue.component(CarouselItem.name, CarouselItem);
}