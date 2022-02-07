import { checkMobile } from '@/common/utils/common';
import { Menu } from '@/types/common';
import { gnbState } from '.';

export enum MutationTypes {
	SET_GNB = 'SET_GNB',
}

export const mutations = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	[MutationTypes.SET_GNB](state: gnbState, gnbs: Menu[]) {
		state.gnb = gnbs;
	},
};

export type Mutations = typeof mutations;
