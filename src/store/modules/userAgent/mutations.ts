import { checkMobile } from '@/common/utils/common';
import { userAgentState } from '.';

export enum MutationTypes {
	SET_USER_AGENT = 'SET_USER_AGENT',
}

export const mutations = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	[MutationTypes.SET_USER_AGENT](state: userAgentState) {
		state.mobileState = checkMobile();
	},
};

export type Mutations = typeof mutations;
