import { Menu } from '@/types/common';
import { Module } from 'vuex';
import { RootState } from '../../index';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export interface gnbState {
	gnb: Menu[];
}

export const gnb: Module<gnbState, RootState> = {
	namespaced: false,
	state: () => ({
		gnb: [] as Menu[],
	}),
	mutations: mutations,
	getters: getters,
	actions: actions,
};
