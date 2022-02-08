import { userAgentState } from '.';

export const getters = {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	fetchUserAgent(state: userAgentState) {
		return state.mobileState;
	},
};

export type Getters = typeof getters;
