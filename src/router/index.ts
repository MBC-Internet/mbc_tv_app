import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';
import TimeLine from '@/views/timeline/Index.vue';
import { userAgnetType } from '@/store/modules/userAgent/types';
import { loadingSpinner } from '@/store/modules/loading/types';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Timeline',
		component: TimeLine,
	},
	{
		path: '/news',
		name: 'News',
		component: () => import('@/views/news/Index.vue'),
	},
	{
		path: '/onAir',
		name: 'OnAir',
		component: () => import('@/views/onair/Index.vue'),
	},
	{
		path: '/mbicLive',
		name: 'MbicLive',
		component: () => import('@/views/mbiclive/Index.vue'),
	},
	{
		path: '/replay',
		name: 'Replay',
		component: () => import('@/views/replay/Index.vue'),
	},
	{
		path: '/nowFree',
		name: 'NowFree',
		component: () => import('@/views/nowfree/Index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.isReady().then(() => {
	store.dispatch(userAgnetType.actions.FETCH_USER_AGENT, null);
});

router.beforeEach((to, from, next) => {
	store.commit(loadingSpinner.mutations.ON_SPINNER);
	setTimeout(() => {
		next();
	}, 1);
});

router.afterEach((to, from, next) => {
	//store.commit(loadingSpinner.mutations.OFF_SPINNER);
	const toDepth = to.path.split('/').length;
	const fromDepth = from.path.split('/').length;
	to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

export default router;
