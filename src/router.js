import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './views/HomeView.vue';
import GoodDogs from './views/GoodDogs.vue';
import BadDogs from './views/BadDogs.vue';

const routes = [
	{
		path: '/good',
		name: 'good',
		component: GoodDogs,
	},
	{
		path: '/bad',
		name: 'bad',
		component: BadDogs,
	},
	{
		path: '/',
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
