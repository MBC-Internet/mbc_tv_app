import { StoreTypes } from '@/types/store';

export const loadingSpinner: StoreTypes = {
	getters: {
		GET_STATUS: 'GET_STATUS',
	},
	mutations: {
		ON_SPINNER: 'ON_SPINNER',
		OFF_SPINNER: 'OFF_SPINNER',
	},
	actions: {},
};
