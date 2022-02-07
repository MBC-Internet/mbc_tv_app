import { checkMobile } from '@/common/utils/common';
import { Menu } from '@/types/common';
import { Module, ActionContext } from 'vuex';
import { RootState } from '../../index';
import { getters } from './getters';
import { mutations } from './mutations';

export interface gnbState {
	gnb: Menu[];
}

export const gnb: Module<gnbState, RootState> = {
	namespaced: true,
	state: () => ({
		gnb: [] as Menu[],
	}),
	mutations: mutations,
	getters: getters,
	actions: {},
};
