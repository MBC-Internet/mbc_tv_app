import { Menu } from '@/types/common';
import { gnbState } from '.';
import { gnbType } from './types';

export const mutations = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	[gnbType.mutations.SET_GNB](state: gnbState, gnbs: Menu[]) {
		state.gnb = gnbs;
	},
};

export type Mutations = typeof mutations;
