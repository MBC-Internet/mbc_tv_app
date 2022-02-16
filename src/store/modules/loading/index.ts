import { Module } from 'vuex';
import { RootState } from '../../index';
import { loadingSpinner } from './types';

export interface loadingState {
	isLoading: boolean;
}

export const loading: Module<loadingState, RootState> = {
	namespaced: false,
	state: () => ({
		isLoading: true,
	}),
	mutations: {
		[loadingSpinner.mutations.ON_SPINNER](state: loadingState) {
			state.isLoading = true;
		},
		[loadingSpinner.mutations.OFF_SPINNER](state: loadingState) {
			state.isLoading = false;
		},
	},
	getters: {
		[loadingSpinner.getters.GET_STATUS](state: loadingState): boolean {
			return state.isLoading;
		},
	},
	actions: {},
};
