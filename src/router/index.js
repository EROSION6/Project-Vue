import MainPage from '@/pages/MainPage.vue'
import PhotoPages from '@/pages/PhotoPages.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/photo', component: PhotoPages },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
