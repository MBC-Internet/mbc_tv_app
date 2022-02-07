import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useStore } from 'vuex';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Timeline',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '*',
		component: () => import('../component/Notfound.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.VUE_APP_DEV_URL),
	routes,
});

router.isReady().then(async () => {
	useStore().commit('SET_USER_AGENT');
});

export default router;
