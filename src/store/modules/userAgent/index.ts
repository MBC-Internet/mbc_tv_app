import { getUserAgentFromCookie } from '@/common/utils/cookies';
import { Module } from 'vuex';
import { RootState } from '../../index';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export interface userAgentState {
	mobileState: string;
}

export const userAgent: Module<userAgentState, RootState> = {
	namespaced: false,
	state: () => ({
		mobileState: getUserAgentFromCookie() || '',
	}),
	mutations: mutations,
	getters: getters,
	actions: actions,
};
