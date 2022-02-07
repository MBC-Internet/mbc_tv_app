import { checkMobile } from '@/common/utils/common';
import { Module, ActionContext } from 'vuex';
import { RootState } from '../../index';
import { getters } from './getters';
import { mutations } from './mutations';

export interface userAgentState {
	mobileState: string;
}

export const userAgent: Module<userAgentState, RootState> = {
	namespaced: true,
	state: () => ({
		mobileState: '',
	}),
	mutations: mutations,
	getters: getters,
	actions: {},
};
