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
		path: '/news',
		name: 'News',
		component: () => import('../views/News.vue'),
	},
	{
		path: '/onAir',
		name: 'OnAir',
		component: () => import('../views/OnAir.vue'),
	},
	{
		path: '/mbicLive',
		name: 'MbicLive',
		component: () => import('../views/MbicLive.vue'),
	},
	{
		path: '/replay',
		name: 'Replay',
		component: () => import('../views/Replay.vue'),
	},
	{
		path: '/nowFree',
		name: 'NowFree',
		component: () => import('../views/NowFree.vue'),
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
