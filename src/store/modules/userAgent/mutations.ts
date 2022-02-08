import { userAgentState } from '.';
import { userAgnetType } from './types';

export const mutations = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	[userAgnetType.mutations.SET_USER_AGENT](
		state: userAgentState,
		mobileType: string,
	) {
		state.mobileState = mobileType;
	},
};

export type Mutations = typeof mutations;
