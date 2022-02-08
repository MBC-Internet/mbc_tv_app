import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';
import TimeLine from '../views/TimeLine.vue';
import { userAgnetType } from '@/store/modules/userAgent/types';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Timeline',
		component: TimeLine,
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.isReady().then(() => {
	store.dispatch(userAgnetType.actions.FETCH_USER_AGENT, null);
});

export default router;
