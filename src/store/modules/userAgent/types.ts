import { StoreTypes } from '@/types/store';

export const userAgnetType: StoreTypes = {
	actions: {
		FETCH_USER_AGENT: 'FETCH_USER_AGENT',
	},
	mutations: {
		SET_USER_AGENT: 'SET_USER_AGENT',
	},
	getters: {},
};
